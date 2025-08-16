"use server";

import { db } from "@/lib/db";
import { searchedNovels } from "@/lib/schema";

export async function seedDatabase() {
  try {
    const sampleNovels = [
      {
        title: "Solo Leveling",
        link: "/novel/solo-leveling",
        description: `10 years ago, after "the Gate" that connected the real world with the monster world opened, some of the ordinary, everyday people received the power to hunt monsters within the Gate. They are known as "Hunters".`,
        searchCount: 156,
        rating: "9.2",
        status: "Completed",
      },
      {
        title: "Overlord",
        link: "/novel/overlord",
        description:
          "The story begins with Yggdrasil, a popular online game which is quietly shut down one day. Our protagonist Momonga decides to stay in his beloved game until the last moment.",
        searchCount: 142,
        rating: "8.9",
        status: "Ongoing",
      },
      {
        title: "Re:Zero - Starting Life in Another World",
        link: "/novel/re-zero-kara-hajimeru-isekai-seikatsu",
        description:
          "Suddenly, high school student Subaru Natsuki has been summoned to another world on the way back from the convenience store.",
        searchCount: 128,
        rating: "8.7",
        status: "Ongoing",
      },
      {
        title: "That Time I Got Reincarnated as a Slime",
        link: "/novel/tensei-shitara-slime-datta-ken",
        description:
          "A man is stabbed by a robber on the run after pushing his coworker and his coworker's new fiance out of the way.",
        searchCount: 115,
        rating: "8.5",
        status: "Ongoing",
      },
      {
        title: "The Beginning After The End",
        link: "/novel/the-beginning-after-the-end",
        description:
          "King Grey has unrivaled strength, wealth, and prestige in a world governed by martial ability.",
        searchCount: 98,
        rating: "9.0",
        status: "Ongoing",
      },
      {
        title: "Mushoku Tensei",
        link: "/novel/mushoku-tensei-isekai-ittara-honki-dasu",
        description:
          "A 34-year-old NEET otaku is chased out from his house by his family. This virgin, plump, unattractive, and penniless guy is hit by a truck and killed.",
        searchCount: 87,
        rating: "8.8",
        status: "Completed",
      },
    ];

    for (const novel of sampleNovels) {
      await db.insert(searchedNovels).values(novel).onConflictDoNothing();
    }

    return { success: true, message: "Database seeded successfully!" };
  } catch (error) {
    console.error("Error seeding database:", error);
    return { success: false, message: "Failed to seed database" };
  }
}
