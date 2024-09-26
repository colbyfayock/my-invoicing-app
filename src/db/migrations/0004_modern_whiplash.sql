ALTER TABLE "customers" ADD COLUMN "organizationId" text NOT NULL;--> statement-breakpoint
ALTER TABLE "invoices" ADD COLUMN "organizationId" text NOT NULL;