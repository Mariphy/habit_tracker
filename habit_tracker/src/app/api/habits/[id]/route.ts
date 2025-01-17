import { connectToDb } from '../../../api/db';
import { NextRequest } from 'next/server';

type Params = {
    id: string;
}

export async function DELETE(request: NextRequest, { params }: {params: Params}) {
    const { db } = await connectToDb();
    const habitId = params.id;
    const habit = await db.collection('habits').findOne({ id: habitId });

    if(!habit) {
        return new Response('Habit not found', { status: 404 });
    }

    return new Response(JSON.stringify(habit), { status: 202 });
}