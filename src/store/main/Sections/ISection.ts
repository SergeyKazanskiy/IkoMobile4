import { IBook } from "./IBook";

export interface ISection {
  id: number;
  active: boolean;
  title: string;
  books: IBook[];
}
