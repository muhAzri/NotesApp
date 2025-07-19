import React from 'react';
import { useAppDispatch } from '@/hooks/redux';
import { deleteNote, toggleArchive } from '@/store/notesSlice';
import { IconButton } from '@/components/ui';
import { DeleteIcon, ArchiveIcon, UnarchiveIcon } from '@/components/icons';
import type { Note } from '@/types';

interface NoteCardProps {
  note: Note;
}

export default function NoteCard({ note }: NoteCardProps): React.JSX.Element {
  const dispatch = useAppDispatch();

  const handleDelete = (): void => {
    dispatch(deleteNote(note.id));
  };

  const handleToggleArchive = (): void => {
    dispatch(toggleArchive(note.id));
  };

  const bgClasses = note.archived 
    ? 'bg-gradient-to-r from-yellow-50 to-orange-50' 
    : 'bg-gradient-to-r from-white to-gray-50';

  return (
    <div className={`border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-200 ${bgClasses}`}>
      <div className="flex justify-between items-start mb-3">
        <h4 className="text-lg font-semibold text-gray-800 flex-1 break-words">{note.title}</h4>
        <div className="flex gap-2 ml-4 flex-shrink-0">
          <IconButton
            onClick={handleToggleArchive}
            color={note.archived ? 'blue' : 'yellow'}
            title={note.archived ? "Unarchive" : "Archive"}
          >
            {note.archived ? <UnarchiveIcon /> : <ArchiveIcon />}
          </IconButton>
          <IconButton
            onClick={handleDelete}
            color="red"
            title="Delete"
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </div>
      <p className="text-gray-600 leading-relaxed mb-3 break-words">{note.body}</p>
      <p className="text-xs text-gray-400">
        {new Date(note.createdAt).toLocaleDateString('id-ID', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </p>
    </div>
  );
}