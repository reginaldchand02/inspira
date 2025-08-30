export type Design = {
  id: number;
  title: string;
  description: string;
  media_storage_bucket_url: string;
  category: string;
  license: string;
  creator: string;
  created_at: string;
  updated_at: string;
  ai_prompt?: string;
  tags?: string[];
  href?: string;
};
