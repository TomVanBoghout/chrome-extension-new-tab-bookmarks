import { createChromeStorageStateHookSync } from 'use-chrome-storage';
import { ISection } from '../types';

const initialValue: ISection[] = [
  {
    id: '1',
    title: 'General bookmarks',
  },
];

export const useSectionsStore = createChromeStorageStateHookSync(
  'SECTIONS',
  initialValue,
);
