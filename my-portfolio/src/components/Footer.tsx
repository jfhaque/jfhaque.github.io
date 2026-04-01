import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-bg border-t border-textSecondary/10 text-textSecondary text-center py-6">
      <p className="text-sm font-mono">
        Designed &amp; Built by{" "}
        <span className="text-accent">Junaid Faizan Haque</span>
      </p>
    </footer>
  );
};

export default Footer;
