import React, { FC } from 'react';
import { Bookmark, SectionTitle } from '../atoms';
import styled from 'styled-components';
import { palette } from '../../constants';
import { ISection } from '../../types';
import { AddBookmarkButton } from './AddBookmarkButton.component';

const Wrapper = styled.div`
  background-color: ${palette.dark};
  border-radius: 10px;
  color: ${palette.main};
  margin-bottom: 1em;
  padding: 1em;
  // not sure we should add shadow
  // box-shadow: 2px 2px 4px 0 ${palette.main};
`;

interface IProps {
  section: ISection;
}

export const Section: FC<IProps> = ({ section: { bookmarks, id, title } }) => {
  return (
    <Wrapper>
      <SectionTitle>{title}</SectionTitle>
      {bookmarks.map((bookmark) => (
        <Bookmark {...bookmark} />
      ))}
      <AddBookmarkButton sectionId={id} />
    </Wrapper>
  );
};
