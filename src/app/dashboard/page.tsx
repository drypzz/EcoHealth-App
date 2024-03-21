import { Metadata } from "next";
import { Suspense } from "react";

import DashboardPage from "../components/Dashboard/Dashboard";
import Loading from "../loading";

export const metadata: Metadata = {
    title: "CDT Tech - Dashboard",
    description: "Capacitação Digital para a Terceira Idade - Dashboard",
};

export default function Dashboard() {
    return (
        <Suspense fallback={<Loading />}>
            <DashboardPage />
        </Suspense>
    );
};