import { connectToDb } from "../db";
import { ObjectId } from "mongodb";

export async function GET() {
    const { db } = await connectToDb();
    const habits = await db.collection('habits').find({}).toArray();

    return new Response(JSON.stringify(habits), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export async function POST(request: Request) {
    const { db } = await connectToDb();
    const habit = await request.json();
    const result = await db.collection('habits').insertOne(habit);

    const insertedHabit = await db.collection('habits').findOne({ _id: result.insertedId });
    return new Response(JSON.stringify(insertedHabit), {
        status: 201,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export async function DELETE(request: Request) {
    const { db } = await connectToDb();
    const { id } = await request.json();

    const result = await db.collection('habits').deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 1) {
        return new Response(null, {
            status: 204,
        });
    } else {
        return new Response(JSON.stringify({ error: 'Habit not found' }), {
            status: 404,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}

