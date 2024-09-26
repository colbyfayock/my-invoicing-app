ALTER TABLE "invoices" ADD COLUMN "customerId" integer NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "invoices" ADD CONSTRAINT "invoices_customerId_invoices_id_fk" FOREIGN KEY ("customerId") REFERENCES "public"."invoices"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
