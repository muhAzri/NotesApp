import React, { useMemo } from 'react';
import { useAppSelector } from '@/hooks/redux';
import NoteCard from '@/components/NoteCard';
import { EmptyState } from '@/components/ui';
import { ArchiveIcon } from '@/components/icons';
import type { Note } from '@/types';

export default function ArchivedNotes(): React.JSX.Element {
  const { notes, searchKeyword } = useAppSelector((state) => state.notes);

  const archivedNotes = useMemo((): Note[] => {
    return notes
      .filter((note) => note.archived)
      .filter((note) => 
        note.title.toLowerCase().includes(searchKeyword.toLowerCase())
      );
  }, [notes, searchKeyword]);

  return (
    <div className="bg-gradient-to-br from-yellow-50 via-white to-orange-50 min-h-full">
      <div className="container mx-auto px-4 py-6 max-w-6xl">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2 flex items-center">
            <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></span>
            Archived Notes
          </h2>
          <p className="text-gray-600">
            {archivedNotes.length === 0 
              ? searchKeyword 
                ? `No archived notes found for "${searchKeyword}"`
                : "Your archived notes will appear here."
              : `${archivedNotes.length} archived note${archivedNotes.length === 1 ? '' : 's'} found`
            }
          </p>
        </div>

        {archivedNotes.length === 0 ? (
          <EmptyState
            icon={<ArchiveIcon className="w-12 h-12 text-yellow-400" />}
            title={searchKeyword ? 'No Results Found' : 'Archive is Empty'}
            description={searchKeyword 
              ? 'Try adjusting your search terms'
              : 'When you archive notes, they will be safely stored here for future reference.'
            }
            iconBgColor="bg-yellow-100"
          />
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {archivedNotes.map((note) => (
              <NoteCard key={note.id} note={note} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}