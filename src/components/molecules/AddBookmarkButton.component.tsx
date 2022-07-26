import React, { FC } from 'react';
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

interface IProps {
  sectionId: string;
}

export const AddBookmarkButton: FC<IProps> = ({ sectionId }) => {
  const { addBookmark } = useSectionStore();

  const onClick = () => {
    const url = prompt('Please enter url', 'https://');
    if (!!url) {
      const name = prompt('Please enter display name', url);
      !!name && addBookmark(sectionId, { url, name });
    }
  };
  return <Button onClick={onClick}>Add Bookmark</Button>;
};
