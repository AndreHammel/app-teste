import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <>
      <div>Cabeçalho do App Layout</div>
      <div>
        <Outlet />
      </div>
    </>
  );
}
