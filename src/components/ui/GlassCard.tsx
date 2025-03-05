
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
}

const GlassCard = ({ children, className, hoverEffect = true, onClick }: GlassCardProps) => {
  return (
    <div 
      className={cn(
        "glass-panel", 
        hoverEffect && "hover:scale-[1.02] hover:shadow-glass-hover", 
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default GlassCard;
