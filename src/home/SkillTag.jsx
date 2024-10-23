import React from "react";

function SkillTag({ name, color }) {
  return (
    <div
      style={{ backgroundColor: color }}
      className={`
        px-3 py-1 rounded-lg text-zinc-50 text-sm
        transform transition-all duration-300 hover:scale-105
        cursor-default tracking-wide
      `}
    >
      {name}
    </div>
  );
}

export default SkillTag;