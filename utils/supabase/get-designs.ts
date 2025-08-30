import { Design } from "@/types/design.types";
import { supabase } from "./server";

export async function getDesigns(): Promise<Design[]> {
  const { data, error } = await supabase
    .from("designs")
    .select(
      `
        id,
        image_storage_bucket_url,
        created_at,
        title,
        author,
        tags,
        short_description,
        original_href
      `
    )
    .order("created_at", { ascending: false });

  if (error) {
    return [];
  }

  return (data as Design[]) || [];
}
