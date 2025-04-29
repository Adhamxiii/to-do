import { getNotes } from "@/actions/noteActions";
import NewNoteForm from "@/components/NewNoteForm";
import NoteList from "@/components/NoteList";

export default async function Home() {
  const notes: Note[] = await getNotes();

  return (
    <div>
      <header>
        <h1>Note</h1>
      </header>

      <NoteList initialNotes={notes} />
      <NewNoteForm />
    </div>
  );
}
