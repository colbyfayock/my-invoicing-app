CREATE TABLE IF NOT EXISTS "customers" (
	"id" serial PRIMARY KEY NOT NULL,
	"createTs" timestamp DEFAULT now() NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"userId" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "invoices" DROP CONSTRAINT "invoices_customerId_invoices_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "invoices" ADD CONSTRAINT "invoices_customerId_customers_id_fk" FOREIGN KEY ("customerId") REFERENCES "public"."customers"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
