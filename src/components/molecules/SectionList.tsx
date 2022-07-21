import React, { FC } from 'react';
import { useSectionsStore } from '../../storage';
import { ISection } from '../../types';
import { SectionTitle } from '../atoms';

export const SectionList: FC = () => {
  const [sections, setSections, isPersistent, error]: Array<
    [ISection[], any, any, any]
  > = useSectionsStore();

  return (
    <>
      {sections.map((section) => (
        <SectionTitle>{section.title}</SectionTitle>
      ))}
    </>
  );
};
