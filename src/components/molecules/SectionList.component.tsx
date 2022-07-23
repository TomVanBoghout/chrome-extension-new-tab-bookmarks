import React, { FC } from 'react';
import { useSectionStore } from '../../storage';
import styled from 'styled-components';
import { Section } from './Section.component';

const Wrapper = styled.div`
  width: 100%;
`;

export const SectionList: FC = () => {
  const { sections } = useSectionStore();

  return (
    <Wrapper>
      {sections.map((section) => (
        <Section section={section} />
      ))}
    </Wrapper>
  );
};
