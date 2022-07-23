import React, { FC } from 'react';
import { SectionTitle } from '../atoms';
import styled from 'styled-components';
import { palette } from '../../constants';
import { useSectionStore } from '../../storage';

const Button = styled.button`
  background-color: ${palette.darker};
  border: 2px solid ${palette.dark};
  border-radius: 10px;
  color: ${palette.main};
  padding-left: 1em;
  padding-right: 1em;
  &:active {
    background-color: ${palette.dark};
  }
`;

export const AddSection: FC = () => {
  const { addSection } = useSectionStore();

  const onClick = () => {
    const sectionTitle = prompt('Please enter section title', 'Section title');
    if (!!sectionTitle) {
      addSection(sectionTitle);
    }
  };
  return (
    <Button onClick={onClick}>
      <SectionTitle>Add new section</SectionTitle>
    </Button>
  );
};
