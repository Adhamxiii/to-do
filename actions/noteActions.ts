import { databases } from "@/utils/appwrite";
import { ID } from "appwrite";

export async function addNote(content: string): Promise<Note> {
  const newNote = { content: content };

  const response = await databases.createDocument(
    "6752ebdb003405bd7aa4",
    "6752ebfa000d1c1ead0a",
    ID.unique(),
    newNote
  );

  const note = {
    $id: response.$id,
    $createdAt: response.$createdAt,
    content: response.content,
  };

  return note;
}

export async function getNotes(): Promise<Note[]> {
  const response = await databases.listDocuments(
    "6752ebdb003405bd7aa4",
    "6752ebfa000d1c1ead0a"
  );

  const notes: Note[] = response.documents.map((doc) => ({
    $id: doc.$id,
    $createdAt: doc.$createdAt,
    content: doc.content,
  }));

  return notes;
}

export async function deleteNote(id: string) {
  await databases.deleteDocument(
    "6752ebdb003405bd7aa4",
    "6752ebfa000d1c1ead0a",
    id
  );
}
