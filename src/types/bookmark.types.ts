import { IWithId, IWithName } from './base.types';

export interface IBookmark extends IWithName {
  url: string;
}

export interface IBookmarkEntity extends IBookmark, IWithId {}
