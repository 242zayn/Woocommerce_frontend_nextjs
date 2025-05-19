export interface RegFormDataType {
  name: string;
  email: string;
  password: string;
}
export interface CreateBookType {
  title: string;
  genre: string;
  description: string;
  coverImage: File | any;
  file:File | any;
}

export interface GetBookDataType {
  _id: string;
  title: string;
  description: string;
  author: Author;
  coverImage: string;
  file: string;
  genre: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
export type Author = {
  name: string;
};
