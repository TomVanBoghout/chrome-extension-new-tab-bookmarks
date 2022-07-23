import React, { FC } from 'react';
import { SectionTitle } from '../atoms';
import styled from 'styled-components';
import { palette } from '../../constants';
import { ISection } from '../../types';

const Wrapper = styled.div`
  background-color: ${palette.dark};
  border-radius: 10px;
  color: ${palette.main};
  margin-bottom: 1em;
  padding: 1em;
`;

interface IProps {
  section: ISection;
}

export const Section: FC<IProps> = ({ section: { title } }) => {
  return (
    <Wrapper>
      <SectionTitle>{title}</SectionTitle>
    </Wrapper>
  );
};
