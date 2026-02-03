import React from 'react';
import IndividualComp from '@/components/IndividualComp';
import { competition } from '@/data/competitions';
import { notFound } from 'next/navigation';

interface PageProps {
    params: Promise<{
        categoryId: string;
    }>;
}

export async function generateStaticParams() {
    return competition.map((comp) => ({
        categoryId: comp.categoryId.toString(),
    }));
}

export default async function CompetitionPage({ params }: PageProps) {
    const resolvedParams = await params;
    const categoryId = parseInt(resolvedParams.categoryId);
    const compData = competition.find((c) => c.categoryId === categoryId);

    if (!compData) {
        notFound();
    }

    // Cast to any because the data structure matches but types might be loose in JS file
    return <IndividualComp compData={compData as any} />;
}
