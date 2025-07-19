import React, { useMemo } from 'react';
import { useAppSelector } from '@/hooks/redux';
import { useModal } from '@/context/ModalContext';
import NoteCard from '@/components/NoteCard';
import { EmptyState, Button } from '@/components/ui';
import { NoteIcon } from '@/components/icons';
import type { Note } from '@/types';

export default function ActiveNotes(): React.JSX.Element {
  const { notes, searchKeyword } = useAppSelector((state) => state.notes);
  const { openAddNoteModal } = useModal();

  const activeNotes = useMemo((): Note[] => {
    return notes
      .filter((note) => !note.archived)
      .filter((note) => 
        note.title.toLowerCase().includes(searchKeyword.toLowerCase())
      );
  }, [notes, searchKeyword]);

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-full">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 flex items-center">
            <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
            Active Notes
          </h2>
          <p className="text-gray-600">
            {activeNotes.length === 0 
              ? searchKeyword 
                ? `No active notes found for "${searchKeyword}"`
                : "Ready to capture your thoughts!"
              : `${activeNotes.length} active note${activeNotes.length === 1 ? '' : 's'} found`
            }
          </p>
        </div>

        {activeNotes.length === 0 ? (
          <EmptyState
            icon={<NoteIcon className="w-12 h-12 text-gray-400" />}
            title={searchKeyword ? 'No Results Found' : 'Welcome to Notes App!'}
            description={searchKeyword 
              ? 'Try adjusting your search terms'
              : 'Your digital notebook awaits. Start capturing ideas, thoughts, and reminders.'
            }
            action={!searchKeyword ? (
              <Button onClick={openAddNoteModal}>
                Create Your First Note
              </Button>
            ) : undefined}
          />
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {activeNotes.map((note) => (
              <NoteCard key={note.id} note={note} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}