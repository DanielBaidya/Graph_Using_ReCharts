import ApiCallsChart from "@/components/ApiCallCharts";
import DataTransferChart from "@/components/DataTransferChart";
import LineGraphCard from "@/components/LineDataTransferChart";
import RevenueChart from "@/components/RevenueBreakdownChart";
import SalesOverviewChart from "@/components/SalesOverviewChart";
import TicketStatusChart from "@/components/TicketStatusChart";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <SalesOverviewChart />
      <TicketStatusChart />
      <DataTransferChart />
      <ApiCallsChart />
      <LineGraphCard />
      <RevenueChart />
    </div>
  );
}
