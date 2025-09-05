import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const fileUrl = url.searchParams.get("file");

  if (!fileUrl)
    return NextResponse.json(
      { error: "No file URL provided" },
      { status: 400 }
    );

  const fileRes = await fetch(fileUrl);

  if (!fileRes.ok)
    return NextResponse.json({ error: "File not found" }, { status: 404 });

  const buffer = await fileRes.arrayBuffer();

  const filename = fileUrl.split("/").pop() || "design.png";

  return new Response(buffer, {
    headers: {
      "Content-Type":
        fileRes.headers.get("Content-Type") || "application/octet-stream",
      "Content-Disposition": `attachment; filename="${filename}"`,
    },
  });
}
