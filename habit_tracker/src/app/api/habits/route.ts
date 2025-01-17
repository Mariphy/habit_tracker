import { connectToDb } from "../db";

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



