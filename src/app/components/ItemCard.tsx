import React from "react";
import Image from "next/image";

const ItemCard = ({
  iconUrl,
  name,
  level,
  slot,
  baseStats,
  affixGroups = [], // array of { title: string, affixes: string[] }
  tags,
}) => {
  return (
    <div className="bg-zinc-900 rounded-2xl p-1 shadow-xl w-full max-w-sm text-white border border-zinc-700">
      <div className="flex justify-center items-center gap-3">
        <div className="relative w-16 h-16">
          <Image src={iconUrl} alt={name} fill className="rounded-md object-contain" />
        </div>
        <div>
          <p className="text-xl font-semibold leading-tight">{name}</p>
          <p className="text-sm text-zinc-400">Lv.{level}</p>
          {/* <p className="text-sm text-zinc-400">Lv.{level} • Slot {slot}</p> */}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-4">
        <p className="text-sm text-zinc-400">Base Stats:</p>
        <ul className="text-sm ml-4 list-disc">
          {baseStats.map((stat, i) => (
            <div key={i}>{stat}</div>
          ))}
        </ul>
      </div>

      {affixGroups.map((group, index) => (
        <div className="flex flex-col justify-center items-center mt-3" key={index}>
          <p className="text-sm text-purple-400">{group.title}:</p>
          <ul className="text-sm ml-4 list-disc">
            {group.affixes.map((affix, i) => (
              <li key={i}>{affix}</li>
            ))}
          </ul>
        </div>
      ))}

      <div className="mt-4 flex flex-wrap justify-center items-center gap-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="text-xs bg-zinc-700 rounded-full px-3 py-1 border border-zinc-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ItemCard;
