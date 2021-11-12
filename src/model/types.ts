export interface ICategory {
  id: string;
  title: string;
}

export interface ISection {
  id: string;
  title: string;
  categoryId: string;
}

export interface ICabinet {
  id: string;
  title: string;
  sectionId: string;
}

export interface IShelf {
  id: string;
  title: string;
  cabinetId: string;
}

export interface IBook {
  id: string;
  title: string;
  type: string;
  active: boolean;
  shelfId: string;
}

export interface IChapter {
  id: string;
  title: string;
  type: string;
  bookId: string;
}

export interface IScheme {
  id: string;
  title: string;
  type: string;
  chapterId: string;
}

export interface IElement {
  id: string;
  title: string;
  type: string;
  schemeId: string;
}

export interface ILink {
  id: string;
  title: string;
  type: string;
  from: string;
  to: string;
  parametr: string;
}
