import React from "react";

type CircleImageIconProps = {
  icon: string;
  color: string;
  className?: string;
};

export default function CircleImageIcon(CircleImageIcon: CircleImageIconProps) {
  const { icon, color, className } = CircleImageIcon;

  return (
    <div className={`rounded-3xl bg-[${color}] p-2.5 ${className}`}>
      <img src={icon} className="h-6" />
    </div>
  );
}
