import type { Note } from '@/types';

const STORAGE_KEY = 'notes-app-data';

export interface StoredData {
  notes: Note[];
  lastUpdated: string;
}

export const loadNotesFromStorage = (): Note[] | null => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    
    const data: StoredData = JSON.parse(stored);
    
    if (!Array.isArray(data.notes)) return null;
    
    const isValidNotes = data.notes.every((note: any) => 
      typeof note.id === 'number' &&
      typeof note.title === 'string' &&
      typeof note.body === 'string' &&
      typeof note.archived === 'boolean' &&
      typeof note.createdAt === 'string'
    );
    
    if (!isValidNotes) return null;
    
    return data.notes;
  } catch (error) {
    console.warn('Failed to load notes from localStorage:', error);
    return null;
  }
};

export const saveNotesToStorage = (notes: Note[]): void => {
  try {
    const data: StoredData = {
      notes,
      lastUpdated: new Date().toISOString()
    };
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Failed to save notes to localStorage:', error);
  }
};

export const clearNotesStorage = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear notes storage:', error);
  }
};