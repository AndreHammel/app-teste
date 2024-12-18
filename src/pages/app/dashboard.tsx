import { Helmet } from "react-helmet-async";

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex justify-center items-center h-screen">
        <div>
          <h1>Dashboard</h1>
        </div>
      </div>
    </>
  );
}
