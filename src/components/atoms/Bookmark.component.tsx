import styled from 'styled-components';
import { IBookmarkEntity } from '../../types';
import { FC } from 'react';

const BookmarkLink = styled.a`
  font-size: 1em;
  text-align: center;
  color: green;
`;

export const Bookmark: FC<IBookmarkEntity> = ({ name, url }) => <BookmarkLink href={url}>{name}</BookmarkLink>;
