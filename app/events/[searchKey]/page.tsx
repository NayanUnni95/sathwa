import { notFound } from "next/navigation";
import IndividualComp from "@/components/IndividualComp";
import { event } from "@/data/event";
import type { CompetitionData } from "@/types/types";

interface PageProps {
  params: Promise<{
    searchKey: string;
  }>;
}

export async function generateStaticParams() {
  return event.map((comp) => ({
    searchKey: comp.searchKey.toString(),
  }));
}

export default async function EventPage({ params }: PageProps) {
  const resolvedParams = await params;
  const searchKey = resolvedParams.searchKey;
  const eventData = event.find((c) => c.searchKey === searchKey);

  if (!eventData) {
    notFound();
  }

  // Cast to any because the data structure matches but types might be loose in JS file
  return <IndividualComp compData={eventData as CompetitionData} />;
}
