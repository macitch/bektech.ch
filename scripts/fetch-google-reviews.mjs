import fs from "node:fs/promises";

const key = process.env.GOOGLE_MAPS_API_KEY;
const placeId = process.env.GOOGLE_PLACE_ID;

if (!key || !placeId) {
  throw new Error("Missing GOOGLE_MAPS_API_KEY or GOOGLE_PLACE_ID");
}

const url = `https://places.googleapis.com/v1/places/${encodeURIComponent(
  placeId
)}?languageCode=fr`;

const res = await fetch(url, {
  headers: {
    "X-Goog-Api-Key": key,
    "X-Goog-FieldMask": [
      "displayName",
      "rating",
      "userRatingCount",
      "reviews",
      "googleMapsUri",
    ].join(","),
  },
});

const raw = await res.text();
if (!res.ok) {
  throw new Error(`Google API request failed (${res.status}): ${raw}`);
}

const data = JSON.parse(raw);

const out = {
  name: data?.displayName?.text ?? "",
  rating: data?.rating ?? 0,
  user_ratings_total: data?.userRatingCount ?? 0,
  url: data?.googleMapsUri ?? "",
  reviews: (Array.isArray(data?.reviews) ? data.reviews : [])
    .slice(0, 8)
    .map((r) => ({
      author_name: r?.authorAttribution?.displayName ?? "Client",
      rating: r?.rating ?? 0,
      text: r?.text?.text ?? "",
      relative_time_description: r?.relativePublishTimeDescription ?? "",
      time: r?.publishTime ? Math.floor(new Date(r.publishTime).getTime() / 1000) : 0,
      profile_photo_url: r?.authorAttribution?.photoUri ?? "",
    })),
};

await fs.mkdir("public/data", { recursive: true });
await fs.writeFile(
  "public/data/google-reviews.json",
  JSON.stringify(out, null, 2),
  "utf8"
);

console.log("✅ Wrote public/data/google-reviews.json");