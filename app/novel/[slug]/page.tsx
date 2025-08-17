// app/novel/[slug]/page.tsx

import { getNovelDetailsAction } from "@/actions/get-novel-page";
import Navbar from "@/components/navbar";
import { NovelChapters } from "@/components/novel-chapters";
import { generateNovelJsonLd, siteConfig } from "@/lib/metadata";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

// Generate metadata for individual novel pages
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const link = "/" + params.slug;
    const novel = await getNovelDetailsAction({ link });

    if (!novel || !novel.title) {
      return {
        title: "Novel Not Found",
        description: "The requested novel could not be found.",
      };
    }

    const novelUrl = `${siteConfig.url}/novel/${params.slug}`;
    const title = `${novel.title} - Read Online`;
    const description = Array.isArray(novel.description)
      ? novel.description.join(" ").slice(0, 160)
      : novel.description ||
        `Read ${novel.title} online. ${siteConfig.description}`;

    return {
      title,
      description,
      keywords: [
        novel.title,
        "light novel",
        "web novel",
        "read online",
        "manga",
        "anime",
        ...siteConfig.keywords,
      ],
      openGraph: {
        title,
        description,
        url: novelUrl,
        type: "book",
        images: [
          {
            url: novel.imageUrl || siteConfig.ogImage,
            width: 1200,
            height: 630,
            alt: novel.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [novel.imageUrl || siteConfig.twitterImage],
      },
      alternates: {
        canonical: novelUrl,
      },
    };
  } catch (error) {
    return {
      title: "Novel Not Found",
      description: "The requested novel could not be found.",
    };
  }
}

/**
 * This is the inner component that performs the actual data fetching.
 * It's an async Server Component.
 */
async function NovelDetails({ slug }: { slug: string }) {
  try {
    // Reconstruct the relative link from the page's slug parameter.
    // This assumes your URL structure is /novel/[slug]
    const link = "/" + slug;
    const novel = await getNovelDetailsAction({ link });

    // If the action completes but finds no title, it's a valid 404 case.
    if (!novel || !novel.title) {
      notFound();
    }

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              generateNovelJsonLd({
                title: novel.title,
                description: Array.isArray(novel.description)
                  ? novel.description.join(" ")
                  : novel.description || "",
                url: `${siteConfig.url}/novel/${slug}`,
                rating: novel.metadata?.find((m) =>
                  m.heading.toLowerCase().includes("rating")
                )?.text,
                status: novel.metadata?.find((m) =>
                  m.heading.toLowerCase().includes("status")
                )?.text,
              })
            ),
          }}
        />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 ">
          {/* Left Column: Image */}
          <div className="md:col-span-1">
            {novel.imageUrl && (
              <Image
                src={novel.imageUrl}
                alt={`Cover for ${novel.title}`}
                width={300}
                height={450}
                className="w-full rounded-lg object-cover shadow-lg"
                priority // Prioritize loading the main image
              />
            )}
          </div>

          {/* Right Column: Details */}
          <div className="md:col-span-2">
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {novel.title}
            </h1>

            {/* Metadata Section */}
            {novel.metadata && novel.metadata.length > 0 && (
              <ul className="mb-6 space-y-2 border-y border-border py-4 text-muted-foreground">
                {novel.metadata.map((meta, index) => (
                  <li key={index} className="flex flex-wrap">
                    <strong className="mr-2 font-semibold text-foreground">
                      {meta.heading}:
                    </strong>
                    <span>{meta.text}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Description Section */}
            <div className="prose prose-slate max-w-none dark:prose-invert">
              <h2>Description</h2>
              {novel.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
        <NovelChapters novelId={novel.novelId} />
      </>
    );
  } catch (error) {
    // If the action throws our specific "not found" error, trigger Next.js's 404 page.
    if (
      error instanceof Error &&
      error.message.includes("could not be found")
    ) {
      notFound();
    }

    // For any other errors, you can render a general error message.
    return (
      <div className="text-center text-red-500">
        <h2>An Error Occurred</h2>
        <p>Could not load novel details. Please try again later.</p>
      </div>
    );
  }
}

/**
 * This is the main page export. It's a lightweight Server Component
 * whose only job is to set up the Suspense boundary.
 */
export default async function NovelIndividualPage({
  params,
}: {
  params: Promise<{ slug: string }>; // Standard way to type params in the App Router
}) {
  const { slug } = await params;

  return (
    <div className="bg-gradient-to-r from-[#d9a7c7] to-[#fffcdc] dark:from-[#0f0c29] dark:via-[#302b63] dark:to-[#24243e]">
      <main className="container mx-auto max-w-5xl px-4 py-8 space-y-12 ">
        <Navbar />
        <NovelDetails slug={slug} />
      </main>
    </div>
  );
}
