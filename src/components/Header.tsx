import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setSearchKeyword } from '@/store/notesSlice';
import { useModal } from '@/context/ModalContext';
import { Button, Input } from '@/components/ui';
import { PlusIcon, SearchIcon, NoteIcon } from '@/components/icons';
import AddNoteModal from './AddNoteModal';

export default function Header(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const { searchKeyword, notes } = useAppSelector((state) => state.notes);
  const location = useLocation();
  const { isAddNoteModalOpen, openAddNoteModal, closeAddNoteModal } = useModal();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setSearchKeyword(e.target.value));
  };

  const activeNotesCount = notes.filter(note => !note.archived).length;
  const archivedNotesCount = notes.filter(note => note.archived).length;

  return (
    <>
      <header className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 max-w-6xl">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <NoteIcon className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Notes App
              </h1>
            </div>
            
            <Button onClick={openAddNoteModal} size="sm">
              <PlusIcon />
              Add Note
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <nav className="flex space-x-1 bg-gray-100 p-1 rounded-xl">
              <Link
                to="/"
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                  location.pathname === '/' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Active Notes ({activeNotesCount})
              </Link>
              <Link
                to="/archived"
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                  location.pathname === '/archived' 
                    ? 'bg-white text-yellow-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                Archived ({archivedNotesCount})
              </Link>
            </nav>

            <div className="flex-1 max-w-md">
              <Input
                type="search"
                value={searchKeyword}
                onChange={handleSearchChange}
                placeholder="Search notes by title..."
                className="py-2"
                icon={<SearchIcon className="w-4 h-4" />}
              />
            </div>
          </div>
        </div>
      </header>

      <AddNoteModal 
        isOpen={isAddNoteModalOpen} 
        onClose={closeAddNoteModal} 
      />
    </>
  );
}