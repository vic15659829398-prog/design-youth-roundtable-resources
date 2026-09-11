CREATE TABLE `submissions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`submission_token` text NOT NULL,
	`kind` text NOT NULL,
	`company_name` text NOT NULL,
	`brand_name` text,
	`contact_name` text NOT NULL,
	`phone` text NOT NULL,
	`wechat` text,
	`province` text,
	`city` text NOT NULL,
	`payload` text NOT NULL,
	`consent_version` text DEFAULT '1.0' NOT NULL,
	`consent_at` text NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `submissions_submission_token_unique` ON `submissions` (`submission_token`);