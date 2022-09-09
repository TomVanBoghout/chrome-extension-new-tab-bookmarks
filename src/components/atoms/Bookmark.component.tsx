import styled from 'styled-components';
import { IBookmarkEntity } from '../../types';
import React, { FC } from 'react';
import { palette } from '../../constants';
import { getFavIconUrl } from '../../utils';
import { MdDeleteOutline } from 'react-icons/md';

const BookmarkLink = styled.span`
  color: ${palette.light};
  font-size: 1em;
  text-align: center;
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

const DeleteIcon = styled.button`
  position: absolute;
  right: 3px;
  top: 3px;
  background-color: ${palette.main};
  width: 20px;
  height: 20px;
  border-radius: 30px;
`;

const Link = styled.a`
  margin: 1em;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  &:hover {
    background-color: ${palette.light};
    border-radius: 5px;
  }
  &:hover ${BookmarkLink} {
    color: ${palette.dark};
  }
  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const FavIcon = styled.img`
  height: 32px;
  width: 32px;
`;

interface IProps {
  onRemoveBookmark(): void;
  bookmark: IBookmarkEntity;
}

export const Bookmark: FC<IProps> = ({ bookmark: { id, name, url }, onRemoveBookmark }) => {
  const onRemove = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    onRemoveBookmark();
  };

  return (
    <Link href={url}>
      <DeleteIcon onClick={onRemove}>
        <MdDeleteOutline style={{ position: 'absolute', right: '1.5px', top: '1.5px' }} />
      </DeleteIcon>
      <Wrapper>
        <FavIcon alt="Bookmarked FavIcon" src={getFavIconUrl(url)} />
      </Wrapper>
      <BookmarkLink>{name}</BookmarkLink>
    </Link>
  );
};
