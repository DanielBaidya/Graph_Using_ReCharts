import LeadsPieChart from "@/components/Agent/LeadsPieChart";
import QuotesBarChart from "@/components/Agent/QuotesBarChart";
import ApiCallsChart from "@/components/ApiCallCharts";
import DataTransferChart from "@/components/DataTransferChart";
import LineGraphCard from "@/components/LineDataTransferChart";
import QuoteValueDistribution from "@/components/QuoteValueChart";
import RevenueChart from "@/components/RevenueBreakdownChart";
import SalesOverviewChart from "@/components/SalesOverviewChart";
import TicketStatusChart from "@/components/TicketStatusChart";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* <SalesOverviewChart />
      <TicketStatusChart />
      <DataTransferChart />
      <QuoteValueDistribution />
      <ApiCallsChart />
      <LineGraphCard />
      <RevenueChart /> */}
      <QuotesBarChart />
      <LeadsPieChart />
    </div>
  );
}
