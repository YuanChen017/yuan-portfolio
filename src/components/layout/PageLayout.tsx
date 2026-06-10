import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import InkFlowCanvas from "../ui/InkFlowCanvas";

export default function PageLayout() {
  return (
    <>
      {/* Flowing ink streams — fixed behind all content, above body bg */}
      <InkFlowCanvas />
      <Navbar />
      <div className="page-wrapper">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
