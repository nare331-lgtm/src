import { useState } from "react";

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function Link({ href, children, className = "" }: LinkProps) {
  const [, setCurrentPath] = useState(window.location.pathname);
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, "", href);
    setCurrentPath(href);
    // Trigger a custom event to notify App component
    window.dispatchEvent(new PopStateEvent("popstate"));
  };
  
  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
