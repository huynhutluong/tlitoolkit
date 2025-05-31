"use client";

import ItemCard from "../components/ItemCard";

// import { database } from '@/lib/firebase';
// import { ref, get } from 'firebase/database';
// import { useEffect, useState } from 'react';

// type Hero = {
//   hero_id: number;
//   hero_name: string;
// };

export default function TestGround() {
  return (
    <div className="test-ground">
      <ItemCard
        iconUrl="/items/hero_memories/hero_memory_45.png"
        name="Memory of Origin"
        level={86}
        slot={1}
        baseStats={["+110 Intelligence"]}
        affixGroups={[
          {
            title: "Fixed Affix",
            affixes: ["+14% Crit Damage", "+17% Spell Block"],
          },
          {
            title: "Random Affix",
            affixes: ["+35% Lightning Damage", "+13% Energy Shield"],
          },
        ]}
        tags={["Hero Memory"]}
      />

      <ItemCard
        iconUrl="/items/hero_memories/hero_memory_60.png"
        name="Ancient Staff"
        level={50}
        slot={2}
        baseStats={["+90 Spell Power"]}
        affixGroups={[
          { title: "Prefix", affixes: ["+10% Cast Speed"] },
          { title: "Suffix", affixes: ["+20 Mana Regen"] },
          { title: "Base Affix", affixes: ["+5% Lightning Resistance"] },
        ]}
        tags={["Weapon", "Staff"]}
      />
    </div>
  );
}
