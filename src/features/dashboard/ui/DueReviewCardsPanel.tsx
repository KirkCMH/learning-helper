import { SectionCard } from "@/components/ui";

import type { ReviewCard } from "@/features/learning/domain/learning.types";

type DueReviewCardsPanelProps = {
  cards: ReviewCard[];
};

export function DueReviewCardsPanel({ cards }: DueReviewCardsPanelProps) {
  return (
    <SectionCard title="到期複習卡" className="md:col-span-1">
      <ul className="mt-3 space-y-2 text-sm">
        {cards.map((card) => (
          <li key={card.id} className="rounded-md bg-indigo-50 px-3 py-2">
            {card.prompt}
          </li>
        ))}
        {cards.length === 0 && <li className="text-slate-500">目前沒有到期複習卡</li>}
      </ul>
    </SectionCard>
  );
}
