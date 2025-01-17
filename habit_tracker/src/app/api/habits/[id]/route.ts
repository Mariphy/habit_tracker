import { connectToDb } from '../../../api/db';
import { NextRequest } from 'next/server';

export async function DELETE(request: NextRequest) {
    // Extract the habitId from the URL path
    const habitId = request.url.split('/').pop(); // Gets the last part of the URL (i.e., the habitId)
  
    if (!habitId) {
      return new Response('Habit ID is required', { status: 400 });
    }
  
    const { db } = await connectToDb();
    const habit = await db.collection('habits').findOne({ id: habitId });
  
    if (!habit) {
      return new Response('Habit not found', { status: 404 });
    }
  
    // Perform the deletion operation
    await db.collection('habits').deleteOne({ id: habitId });
  
    return new Response('Habit deleted successfully', { status: 200 });
  }