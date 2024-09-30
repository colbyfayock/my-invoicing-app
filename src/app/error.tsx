"use client";

import NextError from "next/error";

export default function ErrorPage({ error }: { error: Error }) {
  return <NextError statusCode={500} title={error.message} />;
}
