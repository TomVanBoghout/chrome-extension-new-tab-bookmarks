import styled from 'styled-components';
import { IBookmarkEntity } from '../../types';
import { FC } from 'react';
import { palette } from '../../constants';
import { getFavIconUrl } from '../../utils';

const Link = styled.a`
  margin: 1em;
  &:hover {
    background-color: ${palette.light};
    border-radius: 5px;
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
  align-items: center;
  background-color: ${palette.main};
  border-radius: 25px;
  color: ${palette.darker};
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
  height: 50px;
  width: 50px;
`;
const FavIcon = styled.img`
  height: 32px;
  width: 32px;
`;

const BookmarkLink = styled.span`
  color: ${palette.light};
  font-size: 1em;
  text-align: center;
`;

export const Bookmark: FC<IBookmarkEntity> = ({ name, url }) => (
  <Link href={url}>
    <Wrapper>
      <FavIcon alt="Bookmarked FavIcon" src={getFavIconUrl(url)} />
    </Wrapper>
    <BookmarkLink>{name}</BookmarkLink>
  </Link>
);
