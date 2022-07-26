import { IWithId } from './base.types';
import { IBookmarkEntity } from './bookmark.types';

export interface ISection extends IWithId {
  title: string;
  bookmarks: IBookmarkEntity[];
}
