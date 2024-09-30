import { auth } from "@clerk/nextjs/server";
import { and, eq, isNull } from "drizzle-orm";
import { notFound } from "next/navigation";

import { db } from "@/db";
import { Customers, Invoices } from "@/db/schema";
import Invoice from "./Invoice";

export default async function InvoicePage({
  params,
}: { params: { invoiceId: string } }) {
  const { userId, orgId } = auth();

  if (!userId) return;

  const invoiceId = Number.parseInt(params.invoiceId);

  if (Number.isNaN(invoiceId)) {
    throw new Error("Invalid Invoice ID");
  }

  // Displaying all invoices for public demo

  let [result]: Array<{
    invoices: typeof Invoices.$inferSelect;
    customers: typeof Customers.$inferSelect;
  }> = await db
    .select()
    .from(Invoices)
    .innerJoin(Customers, eq(Invoices.customerId, Customers.id))
    .limit(1);

  // if (orgId) {
  //   [result] = await db
  //     .select()
  //     .from(Invoices)
  //     .innerJoin(Customers, eq(Invoices.customerId, Customers.id))
  //     .where(
  //       and(eq(Invoices.id, invoiceId), eq(Invoices.organizationId, orgId)),
  //     )
  //     .limit(1);
  // } else {
  //   [result] = await db
  //     .select()
  //     .from(Invoices)
  //     .innerJoin(Customers, eq(Invoices.customerId, Customers.id))
  //     .where(
  //       and(
  //         eq(Invoices.id, invoiceId),
  //         eq(Invoices.userId, userId),
  //         isNull(Invoices.organizationId),
  //       ),
  //     )
  //     .limit(1);
  // }

  if (!result) {
    notFound();
  }

  const invoice = {
    ...result.invoices,
    customer: result.customers,
  };

  return <Invoice invoice={invoice} />;
}
