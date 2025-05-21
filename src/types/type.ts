export interface RegFormDataType {
  name: string;
  email: string;
  password: string;
}
export interface CreateBookType {
  title: string;
  price: string;
  description: string;
  imagesURL: string;
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

// Get prododucts type

export interface GetProductsTypes {
  success: boolean;
  count: number;
  products?: ProductsEntity[] | null;
}
export interface ProductsEntity {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  type: string;
  status: string;
  featured: boolean;
  catalog_visibility: string;
  description: string;
  short_description: string;
  sku: string;
  price: string;
  regular_price: string;
  sale_price: string;
  date_on_sale_from?: null;
  date_on_sale_from_gmt?: null;
  date_on_sale_to?: null;
  date_on_sale_to_gmt?: null;
  on_sale: boolean;
  purchasable: boolean;
  total_sales: number;
  virtual: boolean;
  downloadable: boolean;
  downloads?: null[] | null;
  download_limit: number;
  download_expiry: number;
  external_url: string;
  button_text: string;
  tax_status: string;
  tax_class: string;
  manage_stock: boolean;
  stock_quantity?: null;
  backorders: string;
  backorders_allowed: boolean;
  backordered: boolean;
  low_stock_amount?: null;
  sold_individually: boolean;
  weight: string;
  dimensions: Dimensions;
  shipping_required: boolean;
  shipping_taxable: boolean;
  shipping_class: string;
  shipping_class_id: number;
  reviews_allowed: boolean;
  average_rating: string;
  rating_count: number;
  upsell_ids?: null[] | null;
  cross_sell_ids?: null[] | null;
  parent_id: number;
  purchase_note: string;
  categories?: CategoriesEntity[] | null;
  tags?: null[] | null;
  images?: ImagesEntity[] | null;
  attributes?: null[] | null;
  default_attributes?: null[] | null;
  variations?: null[] | null;
  grouped_products?: null[] | null;
  menu_order: number;
  related_ids?: null[] | null;
  meta_data?: null[] | null;
  stock_status: string;
  has_options: boolean;
  post_password: string;
  global_unique_id: string;
  brands?: null[] | null;
  _links: Links;
}
export interface Dimensions {
  length: string;
  width: string;
  height: string;
}
export interface CategoriesEntity {
  id: number;
  name: string;
  slug: string;
}
export interface ImagesEntity {
  id: number;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  src: string;
  name: string;
  alt: string;
}
export interface Links {
  self?: SelfEntity[] | null;
  collection?: CollectionEntity[] | null;
}
export interface SelfEntity {
  href: string;
  targetHints: TargetHints;
}
export interface TargetHints {
  allow?: string[] | null;
}
export interface CollectionEntity {
  href: string;
}
