import { createChromeStorageStateHookSync } from 'use-chrome-storage';
import { IChromeStore, ISection } from '../types';

const initialValue: ISection[] = [
  {
    id: '1',
    title: 'General bookmarks',
  },
];

const sectionStore = createChromeStorageStateHookSync('SECTIONS', initialValue);

export const useSectionStore = () => {
  const [sections, setSections, isSectionsPersistent, sectionsError]: IChromeStore<ISection[]> = sectionStore();

  const resetSections = () => setSections(initialValue);
  const addSection = (title: string) => {
    setSections(
      sections.concat({
        id: `${title}-${Date.now()}`,
        title,
      }),
    );
  };

  return {
    sections,
    sectionsError,
    isSectionsPersistent,
    addSection,
    resetSections,
    setSections,
  };
};
