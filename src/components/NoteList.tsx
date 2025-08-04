import { db } from "@/lib/firebase"
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import toast from "react-hot-toast"
interface Note {
    id : string,
    content : string
}

const NoteList = () => {
    const [notes, setNotes] = useState<Note[]>([])

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'notes'), (snapshot) => {
            const notesData = snapshot.docs.map((doc) => ({
                id : doc.id,
                ...doc.data()
            })) as Note[];
            setNotes(notesData)
        })

        return () => unsubscribe()
    },[])


    if(notes.length === 0){
        return (
            <div className='text-center text-gray-b00 mt-4'>No notes yet.</div>
        )
    }
  return (
     <div className={`grid gap-4 mt-4 ${notes.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
        {notes.map((note) => (
            <div key={note.id} className='p-4 bg-white shadow-md rounded-lg flex items-center justify-between'>
                <p className='text-gray-700'>{note.content}</p>
                <Button variant='destructive'
                onClick={
                    async () => {
                        await deleteDoc(doc(db, 'notes', note.id))
                        toast.success('Note deleted successfully')
                    }
                }>
                    Delete
                </Button>
            </div>
        ))}
     </div>
  )
}

export default NoteList