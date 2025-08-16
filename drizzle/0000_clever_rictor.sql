CREATE TABLE `searched_novels` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`link` text NOT NULL,
	`search_count` integer DEFAULT 1 NOT NULL,
	`last_searched` text DEFAULT (datetime('now')) NOT NULL,
	`created_at` text DEFAULT (datetime('now')) NOT NULL,
	`description` text,
	`image` text,
	`rating` text,
	`status` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `searched_novels_link_unique` ON `searched_novels` (`link`);