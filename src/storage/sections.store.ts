import { createChromeStorageStateHookSync } from 'use-chrome-storage';
import { IBookmark, IChromeStore, ISection } from '../types';

const initialValue: ISection[] = [
  {
    id: '1',
    title: 'General bookmarks',
    bookmarks: [],
  },
];

const sectionStore = createChromeStorageStateHookSync('SECTIONS', initialValue);

export const useSectionStore = () => {
  const [sections, setSections, isSectionsPersistent, sectionsError]: IChromeStore<ISection[]> = sectionStore();
  console.log({ sections });
  const resetSections = () => setSections(initialValue);
  const addSection = (title: string) => {
    setSections(
      sections.concat({
        id: `${title}-${Date.now()}`,
        title,
        bookmarks: [],
      }),
    );
  };

  const removeSection = (sectionId: string) => {
    setSections(sections.filter(({ id }) => id !== sectionId));
  };

  const addBookmark = (sectionId: string, bookmark: IBookmark) => {
    setSections(
      sections.map((section) => {
        if (section.id === sectionId) {
          return {
            ...section,
            bookmarks: section.bookmarks.concat({ ...bookmark, id: `${bookmark.name}-${Date.now()}` }),
          };
        }
        return section;
      }),
    );
  };

  const removeBookmark = (sectionId: string, bookmarkId: string) => {
    setSections(
      sections.map((section) => {
        if (section.id === sectionId) {
          return {
            ...section,
            bookmarks: section.bookmarks.filter(({ id }) => id !== bookmarkId),
          };
        }
        return section;
      }),
    );
  };

  return {
    sections,
    sectionsError,
    isSectionsPersistent,
    addBookmark,
    addSection,
    removeBookmark,
    removeSection,
    resetSections,
    setSections,
  };
};
