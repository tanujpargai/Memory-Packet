import { db } from '@/lib/firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import Recorder from '@/components/Recorder';
import { MemoryPacket } from '@/types';
import { Play, Calendar, User, Tag } from 'lucide-react';

export const dynamic = 'force-dynamic';

async function getMemories() {
  // Hackathon shortcut: Hardcoded user ID "demo_user"
  const q = query(collection(db, "users", "demo_user", "memories"), orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as MemoryPacket));
}

export default async function Home() {
  const memories = await getMemories();

  return (
    <main className="min-h-screen bg-[#f8f9fa] pb-40 font-sans">
      {/* High Contrast Header */}
      <header className="bg-white border-b-4 border-black p-6 sticky top-0 z-10 shadow-sm">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-black text-black tracking-tighter">
            MemoryPacket
          </h1>
          <p className="text-xl text-gray-600 mt-2 font-medium">
            Your personal memory assistant
          </p>
        </div>
      </header>

      {/* Memory Grid */}
      <div className="max-w-3xl mx-auto p-6 grid gap-6">
        {memories.length === 0 ? (
          <div className="text-center p-12 bg-white border-2 border-dashed border-gray-300 rounded-xl">
            <p className="text-2xl text-gray-400 font-bold">No memories recorded yet.</p>
            <p className="text-lg text-gray-400 mt-2">Press the red button below.</p>
          </div>
        ) : (
          memories.map((memory) => (
            <div key={memory.id} className="bg-white border-4 border-black p-6 rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
              
              {/* Card Header: Mood & Time */}
              <div className="flex justify-between items-start mb-4">
                <span className={`px-4 py-1 text-sm font-bold uppercase tracking-wider border-2 border-black rounded-full ${
                  memory.mood === 'Happy' ? 'bg-yellow-300' : 
                  memory.mood === 'Anxious' ? 'bg-red-200' : 'bg-gray-100'
                }`}>
                  {memory.mood}
                </span>
                <div className="flex items-center text-gray-500 font-bold">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(memory.createdAt).toLocaleDateString()}
                </div>
              </div>
              
              {/* Core Memory Summary */}
              <h3 className="text-2xl font-bold text-black leading-snug mb-6">
                "{memory.summary}"
              </h3>

              {/* Footer: Entities & Play */}
              <div className="flex justify-between items-end border-t-2 border-gray-100 pt-4">
                <div className="flex flex-wrap gap-2">
                  {memory.keywords?.map((k, i) => (
                    <span key={i} className="flex items-center text-sm font-bold text-gray-600 bg-gray-100 px-2 py-1 rounded-md">
                      <Tag className="w-3 h-3 mr-1" /> {k}
                    </span>
                  ))}
                </div>
                
                <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors">
                  <Play className="w-5 h-5 fill-current" />
                  Recall
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* The Recorder (Fixed at Bottom) */}
      <Recorder />
    </main>
  );
}
