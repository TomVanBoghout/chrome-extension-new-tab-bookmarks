import { createChromeStorageStateHookSync } from 'use-chrome-storage';
import { IBookmark, IChromeStore } from '../types';

const initialValue: IBookmark[] = [
  {
    id: 'bookmark1',
    name: 'google',
    url: 'https://www.google.com',
  },
];

const bookmarkStore = createChromeStorageStateHookSync(
  'BOOKMARKS',
  initialValue,
);

export const useBookmarkStore = () => {
  const [
    bookmarks,
    setBookmarks,
    isBookmarksPersistent,
    bookmarksError,
  ]: IChromeStore<IBookmark[]> = bookmarkStore();

  const resetBookmarks = () => setBookmarks(initialValue);

  return {
    bookmarks,
    bookmarksError,
    isBookmarksPersistent,
    resetBookmarks,
    setBookmarks,
  };
};
