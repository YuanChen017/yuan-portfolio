import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import InkFlowCanvas from "../ui/InkFlowCanvas";

function HashScroll() {
  const { hash, pathname } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const id = hash.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash, pathname]);
  return null;
}

export default function PageLayout() {
  return (
    <>
      {/* Flowing ink streams — fixed behind all content, above body bg */}
      <InkFlowCanvas />
      <Navbar />
      <div className="page-wrapper">
        <HashScroll />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
