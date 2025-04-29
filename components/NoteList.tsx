"use client";
import { deleteNote } from "@/actions/noteActions";
import { client } from "@/utils/appwrite";
import { useEffect, useState } from "react";

export default function NoteList({ initialNotes }: { initialNotes: Note[] }) {
  const [notes, setNotes] = useState<Note[]>(initialNotes);

  useEffect(() => {
    const channel =
      "databases.6752ebdb003405bd7aa4.collections.6752ebdb003405bd7aa4.documents";

    const unsubscribe = client.subscribe(channel, (res) => {
      const eventType = res.events[0];
      const changedNote = res.payload as Note;

      if (eventType.includes("create")) {
        setNotes((prevNotes) => [changedNote, ...prevNotes]);
      }

      if (eventType.includes("delete")) {
        setNotes((prevNotes) =>
          prevNotes.filter((note) => note.$id !== changedNote.$id)
        );
      }

      if (eventType.includes("update")) {
        setNotes((prevNotes) =>
          prevNotes.map((note) =>
            note.$id === changedNote.$id ? changedNote : note
          )
        );
      }
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async (noteId: string) => {
    const element = document.getElementById(noteId);
    if (element) {
      element.classList.add("crossed-out");
    }

    await deleteNote(noteId);
  };

  return (
    <ul>
      {notes.map((note) => (
        <li key={note.$id} id={note.$id} onClick={() => handleDelete(note.$id)}>
          <p>{note.content}</p>
        </li>
      ))}
    </ul>
  );
}
