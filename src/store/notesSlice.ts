import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Note, NotesState, AddNotePayload } from '@/types';
import { loadNotesFromStorage, saveNotesToStorage } from '@/utils/localStorage';

const loadInitialNotes = (): Note[] => {
  const storedNotes = loadNotesFromStorage();
  return storedNotes;
};

const initialState: NotesState = {
  notes: loadInitialNotes(),
  searchKeyword: ''
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<AddNotePayload>) => {
      const newNote: Note = {
        id: Date.now(),
        title: action.payload.title,
        body: action.payload.body,
        archived: false,
        createdAt: new Date().toISOString()
      };
      state.notes.unshift(newNote);
      saveNotesToStorage(state.notes);
    },
    deleteNote: (state, action: PayloadAction<number>) => {
      state.notes = state.notes.filter(note => note.id !== action.payload);
      saveNotesToStorage(state.notes);
    },
    toggleArchive: (state, action: PayloadAction<number>) => {
      const note = state.notes.find(note => note.id === action.payload);
      if (note) {
        note.archived = !note.archived;
        saveNotesToStorage(state.notes);
      }
    },
    setSearchKeyword: (state, action: PayloadAction<string>) => {
      state.searchKeyword = action.payload;
    },
    saveNotes: (state) => {
      saveNotesToStorage(state.notes);
    },
    clearAllNotes: (state) => {
      state.notes = [];
      saveNotesToStorage(state.notes);
    }
  }
});

export const { addNote, deleteNote, toggleArchive, setSearchKeyword, saveNotes, clearAllNotes } = notesSlice.actions;
export default notesSlice.reducer;