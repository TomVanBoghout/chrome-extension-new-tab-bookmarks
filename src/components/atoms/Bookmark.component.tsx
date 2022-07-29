import styled from 'styled-components';
import { IBookmarkEntity } from '../../types';
import { FC } from 'react';
import { palette } from '../../constants';

const Link = styled.a`
  background-color: ${palette.main};
  border-radius: 5px;
  color: ${palette.darker};
  margin: 1em;
  &:hover {
    background-color: ${palette.light};
    color: ${palette.dark};
  }
  ,
  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const Wrapper = styled.div`
  height: 5em;
  width: 5em;
`;

const BookmarkLink = styled.span`
  font-size: 1em;
  text-align: center;
`;

export const Bookmark: FC<IBookmarkEntity> = ({ name, url }) => (
  <Link href={url}>
    <Wrapper>
      <BookmarkLink>{name}</BookmarkLink>
    </Wrapper>
  </Link>
);
