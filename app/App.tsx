import { useState, useEffect } from "react";
import { HomePage } from "@/app/pages/HomePage";
import { BusanPage } from "@/app/pages/BusanPage";
import { SeoulPage } from "@/app/pages/SeoulPage";

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);
  
  const renderPage = () => {
    switch (currentPath) {
      case "/busan":
        return <BusanPage />;
      case "/seoul":
        return <SeoulPage />;
      default:
        return <HomePage />;
    }
  };
  
  return renderPage();
}
