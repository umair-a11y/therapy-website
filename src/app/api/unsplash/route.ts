import { NextRequest, NextResponse } from "next/server";
import { searchPhotos, getRandomPhotos, getPhoto, trackDownload } from "@/lib/unsplash";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const action = searchParams.get("action");

  try {
    switch (action) {
      case "search": {
        const query = searchParams.get("query");
        if (!query) {
          return NextResponse.json(
            { error: "Query parameter is required" },
            { status: 400 }
          );
        }

        const page = parseInt(searchParams.get("page") || "1");
        const perPage = parseInt(searchParams.get("perPage") || "10");
        const orientation = searchParams.get("orientation") as
          | "landscape"
          | "portrait"
          | "squarish"
          | undefined;

        const results = await searchPhotos(query, {
          page,
          perPage,
          orientation,
        });

        if (!results) {
          return NextResponse.json(
            { error: "Failed to fetch photos" },
            { status: 500 }
          );
        }

        return NextResponse.json(results);
      }

      case "random": {
        const count = parseInt(searchParams.get("count") || "1");
        const query = searchParams.get("query") || undefined;
        const orientation = searchParams.get("orientation") as
          | "landscape"
          | "portrait"
          | "squarish"
          | undefined;

        const photos = await getRandomPhotos({
          count,
          query,
          orientation,
        });

        if (!photos) {
          return NextResponse.json(
            { error: "Failed to fetch random photos" },
            { status: 500 }
          );
        }

        return NextResponse.json(photos);
      }

      case "photo": {
        const photoId = searchParams.get("id");
        if (!photoId) {
          return NextResponse.json(
            { error: "Photo ID is required" },
            { status: 400 }
          );
        }

        const photo = await getPhoto(photoId);

        if (!photo) {
          return NextResponse.json(
            { error: "Photo not found" },
            { status: 404 }
          );
        }

        return NextResponse.json(photo);
      }

      default:
        return NextResponse.json(
          { error: "Invalid action parameter" },
          { status: 400 }
        );
    }
  } catch (error) {
    console.error("Unsplash API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, downloadLocation } = body;

    if (action === "track-download") {
      if (!downloadLocation) {
        return NextResponse.json(
          { error: "Download location is required" },
          { status: 400 }
        );
      }

      await trackDownload(downloadLocation);
      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { error: "Invalid action" },
      { status: 400 }
    );
  } catch (error) {
    console.error("Unsplash API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}