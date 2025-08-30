export type Design = {
  id: number;
  image_storage_bucket_url: string;
  created_at: string;
  title: string;
  author: string;
  tags: string[];
  short_description: string;
  original_href?: string;
};
