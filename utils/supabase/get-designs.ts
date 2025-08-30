import { Design } from "@/types/design.types";
import { supabase } from "./server";

export async function getDesigns(): Promise<Design[]> {
  const { data, error } = await supabase
    .from("designs")
    .select(
      `
        id,
        title,
        description,
        media_storage_bucket_url,
        category,
        license,
        creator,
        created_at,
        updated_at,
        ai_prompt,
        tags,
        href
      `
    )
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching designs:", error);
    return [];
  }

  return (data as Design[]) || [];
}
