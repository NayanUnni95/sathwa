import { notFound } from "next/navigation";
import IndividualComp from "@/components/IndividualComp";
import { workshop } from "@/data/workshops";
import type { CompetitionData } from "@/types/types";

interface PageProps {
  params: Promise<{
    searchKey: string;
  }>;
}

export async function generateStaticParams() {
  return workshop.map((comp) => ({
    searchKey: comp.searchKey.toString(),
  }));
}

export default async function WorkshopPage({ params }: PageProps) {
  const resolvedParams = await params;
  const searchKey = resolvedParams.searchKey;
  const workshopData = workshop.find((c) => c.searchKey === searchKey);

  if (!workshopData) {
    notFound();
  }

  // Cast to any because the data structure matches but types might be loose in JS file
  return <IndividualComp compData={workshopData as CompetitionData} />;
}
