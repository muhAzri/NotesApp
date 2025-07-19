export interface Note {
  id: number;
  title: string;
  body: string;
  archived: boolean;
  createdAt: string;
}

export interface NotesState {
  notes: Note[];
  searchKeyword: string;
}

export interface AddNotePayload {
  title: string;
  body: string;
}