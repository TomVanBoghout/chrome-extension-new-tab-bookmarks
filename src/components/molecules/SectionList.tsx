import React, { FC } from 'react';
import { useSectionStore } from '../../storage';
import { SectionTitle } from '../atoms';

export const SectionList: FC = () => {
  const { sections } = useSectionStore();

  return (
    <>
      {sections.map((section) => (
        <SectionTitle>{section.title}</SectionTitle>
      ))}
    </>
  );
};
