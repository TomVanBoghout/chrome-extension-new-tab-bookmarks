import { IWithId, IWithName } from './base.types';

export interface IBookmark extends IWithId, IWithName {
  url: string;
}
