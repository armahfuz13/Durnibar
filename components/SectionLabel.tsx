import React from 'react';

export const SectionLabel: React.FC<{ label: string; icon?: React.ReactNode }> = ({ label, icon }) => {
  return (
    <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 w-fit mx-auto mb-10 text-white font-medium text-sm tracking-wide shadow-lg">
      {icon && <span className="text-gray-300">{icon}</span>}
      <span>{label}</span>
    </div>
  );
};
