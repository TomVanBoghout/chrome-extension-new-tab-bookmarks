import { createChromeStorageStateHookSync } from 'use-chrome-storage';
import { IBookmark } from '../types';

const initialValue: IBookmark[] = [
  {
    id: 'bookmark1',
    name: 'google',
    url: 'https://www.google.com',
  },
];

export const useBookmarksStore = createChromeStorageStateHookSync(
  'BOOKMARKS',
  initialValue,
);
