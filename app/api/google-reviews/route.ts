import { NextResponse } from "next/server";

export const revalidate = 60 * 60; // 1 hour

type GoogleReviewOut = {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  time: number;
  profile_photo_url: string;
};

type GoogleReviewIn = {
  publishTime?: string;
  rating?: number;
  text?: {
    text?: string;
  };
  relativePublishTimeDescription?: string;
  authorAttribution?: {
    displayName?: string;
    photoUri?: string;
  };
};

function relativeTimeFromUnixSeconds(seconds?: number) {
  if (!seconds) return "";
  const diffMs = Date.now() - seconds * 1000;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays <= 0) return "Aujourd’hui";
  if (diffDays === 1) return "Il y a 1 jour";
  if (diffDays < 30) return `Il y a ${diffDays} jours`;
  const diffMonths = Math.floor(diffDays / 30);
  if (diffMonths === 1) return "Il y a 1 mois";
  if (diffMonths < 12) return `Il y a ${diffMonths} mois`;
  const diffYears = Math.floor(diffMonths / 12);
  if (diffYears === 1) return "Il y a 1 an";
  return `Il y a ${diffYears} ans`;
}

export async function GET() {
  const key = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!key || !placeId) {
    return NextResponse.json(
      { error: "Missing GOOGLE_MAPS_API_KEY or GOOGLE_PLACE_ID" },
      { status: 500 }
    );
  }

  // Places API (New): Place Details via places.googleapis.com
  // NOTE: placeId is your "ChIJ..." string
  const url = `https://places.googleapis.com/v1/places/${encodeURIComponent(
    placeId
  )}?languageCode=fr`;

  const res = await fetch(url, {
    headers: {
      "X-Goog-Api-Key": key,
      // Ask ONLY for what we need (field mask = cheaper + cleaner)
      "X-Goog-FieldMask": [
        "displayName",
        "rating",
        "userRatingCount",
        "reviews",
        "googleMapsUri",
      ].join(","),
    },
    next: { revalidate },
  });

const raw = await res.text(); 

if (!res.ok) {
  return NextResponse.json(
    {
      error: "Google API request failed",
      status: res.status,
      body: raw, // <-- THIS is the important part
      hint:
        "Common causes: Places API (New) not enabled, billing not enabled, key restricted incorrectly, invalid place id.",
    },
    { status: 502 }
  );
}

const data = JSON.parse(raw);

  if (data?.error) {
  return NextResponse.json(
    {
      error: "Google API returned an error",
      details: data.error,
    },
    { status: 502 }
  );
}

  // data fields in Places API (New):
  // - displayName.text
  // - rating
  // - userRatingCount
  // - googleMapsUri
  // - reviews[]: has rating, text.text, publishTime, authorAttribution.photoUri, authorAttribution.displayName

  const name: string = data?.displayName?.text ?? "";
  const rating: number = data?.rating ?? 0;
  const user_ratings_total: number = data?.userRatingCount ?? 0;
  const urlOut: string = data?.googleMapsUri ?? "";

  const reviews: GoogleReviewOut[] = (Array.isArray(data?.reviews) ? data.reviews : []).map(
    (r: GoogleReviewIn) => {
      // publishTime is usually RFC3339 string
      const publishTimeStr: string | undefined = r?.publishTime;
      const unixSeconds =
        publishTimeStr ? Math.floor(new Date(publishTimeStr).getTime() / 1000) : 0;

      return {
        author_name: r?.authorAttribution?.displayName ?? "Client",
        rating: r?.rating ?? 0,
        text: r?.text?.text ?? "",
        relative_time_description:
          r?.relativePublishTimeDescription ?? relativeTimeFromUnixSeconds(unixSeconds),
        time: unixSeconds,
        profile_photo_url: r?.authorAttribution?.photoUri ?? "",
      };
    }
  );

  return NextResponse.json({
    name,
    rating,
    user_ratings_total,
    url: urlOut,
    reviews,
  });
}