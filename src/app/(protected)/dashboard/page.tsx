import { getDashboardOverviewData, DashboardOverview } from "@/features/dashboard";
import { inMemoryLearningRepository } from "@/features/learning/infrastructure/in-memory.learning.repository";

export default async function DashboardPage() {
  const snapshot = await inMemoryLearningRepository.getSnapshot();
  const data = getDashboardOverviewData(snapshot);

  return <DashboardOverview data={data} />;
}
