import { notFound } from "next/navigation";
import IndividualComp from "@/components/IndividualComp";
import { competition } from "@/data/competitions";
import type { CompetitionData } from "@/types/types";

interface PageProps {
  params: Promise<{
    searchKey: string;
  }>;
}

export async function generateStaticParams() {
  return competition.map((comp) => ({
    searchKey: comp.searchKey.toString(),
  }));
}

export default async function CompetitionPage({ params }: PageProps) {
  const resolvedParams = await params;
  const searchKey = resolvedParams.searchKey;
  const compData = competition.find((c) => c.searchKey === searchKey);

  if (!compData) {
    notFound();
  }

  // Cast to any because the data structure matches but types might be loose in JS file
  return <IndividualComp compData={compData as CompetitionData} />;
}
