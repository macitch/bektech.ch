"use client";

import { useEffect, useMemo, useState } from "react";
import { useI18n } from "../i18n/I18nProvider";

type BeholdPostSize = {
  height: number;
  width: number;
  mediaUrl: string;
};

type BeholdPost = {
  id: string;
  permalink: string;
  mediaType: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  mediaUrl: string;
  thumbnailUrl?: string;
  sizes?: {
    small?: BeholdPostSize;
    medium?: BeholdPostSize;
    large?: BeholdPostSize;
    full?: BeholdPostSize;
  };
  caption?: string;
  prunedCaption?: string;
  timestamp?: string;
};

type BeholdFeed = {
  username?: string;
  posts?: BeholdPost[];
};

const FEED_URL = "https://feeds.behold.so/NEElSZ2Pt20feoNC6GtC";
const MAX_POSTS = 6;

function pickImageUrl(post: BeholdPost) {
  return (
    post.sizes?.large?.mediaUrl ||
    post.sizes?.medium?.mediaUrl ||
    post.sizes?.small?.mediaUrl ||
    post.thumbnailUrl ||
    post.mediaUrl
  );
}

export default function InstagramFeed() {
  const { t } = useI18n();
  const [posts, setPosts] = useState<BeholdPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const response = await fetch(`${FEED_URL}?v=${Date.now()}`, {
          cache: "no-store",
        });
        const data = (await response.json().catch(() => null)) as BeholdFeed | null;
        if (cancelled) return;

        if (!response.ok || !data || !Array.isArray(data.posts)) {
          setPosts([]);
          setIsLoading(false);
          return;
        }

        setPosts(data.posts.slice(0, MAX_POSTS));
        setIsLoading(false);
      } catch {
        if (!cancelled) {
          setPosts([]);
          setIsLoading(false);
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const hasPosts = posts.length > 0;

  const gridPosts = useMemo(() => posts, [posts]);

  return (
    <section
      id="instagram"
      className="border-b border-black/10 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--accent-600)]">
              {t.instagram.kicker}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[color:var(--ink-900)] sm:text-4xl">
              {t.instagram.title}
            </h2>
            <p className="mt-4 text-sm leading-6 text-[color:var(--ink-700)]">
              {t.instagram.description}
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-black/10 bg-[color:var(--sand-50)] p-4 sm:p-6">
          {isLoading ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={`ig-skeleton-${index}`}
                  className="aspect-square animate-pulse rounded-2xl bg-[color:var(--sand-200)]"
                />
              ))}
            </div>
          ) : hasPosts ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {gridPosts.map((post) => {
                const imageUrl = pickImageUrl(post);
                const caption = post.prunedCaption || post.caption || "";
                return (
                  <a
                    key={post.id}
                    href={post.permalink}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative block overflow-hidden rounded-2xl bg-black/5"
                  >
                    <img
                      src={imageUrl}
                      alt=""
                      loading="lazy"
                      className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    {caption ? (
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-3 text-xs text-white/90 opacity-0 transition duration-300 group-hover:opacity-100">
                        <p className="max-h-10 overflow-hidden">{caption}</p>
                      </div>
                    ) : null}
                  </a>
                );
              })}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-black/10 bg-white px-6 py-10 text-center text-sm text-[color:var(--ink-700)]">
              {t.instagram.unavailable}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
