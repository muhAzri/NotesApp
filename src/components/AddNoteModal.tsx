import React, { useState } from 'react';
import { useAppDispatch } from '@/hooks/redux';
import { addNote } from '@/store/notesSlice';
import { Button, Input, Textarea } from '@/components/ui';
import { CloseIcon } from '@/components/icons';

interface AddNoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddNoteModal({ isOpen, onClose }: AddNoteModalProps): React.JSX.Element | null {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    title: '',
    body: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.body.trim()) return;

    dispatch(addNote(formData));
    setFormData({ title: '', body: '' });
    onClose();
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    if (value.length <= 50) {
      setFormData({ ...formData, title: value });
    }
  };

  const handleClose = (): void => {
    setFormData({ title: '', body: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
              Add New Note
            </h2>
            <button
              onClick={handleClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              title="Close"
            >
              <CloseIcon className="w-6 h-6 text-gray-500" />
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-gray-700">Title</label>
                <span className="text-xs text-gray-500">
                  {50 - formData.title.length} characters remaining
                </span>
              </div>
              <Input
                value={formData.title}
                onChange={handleTitleChange}
                placeholder="Enter note title..."
                required
                autoFocus
              />
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Content</label>
              <Textarea
                value={formData.body}
                onChange={(e) => setFormData({ ...formData, body: e.target.value })}
                placeholder="Write your note here..."
                required
              />
            </div>
            
            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                onClick={handleClose}
                variant="secondary"
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="primary"
                className="flex-1"
              >
                Add Note
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}