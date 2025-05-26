// app/hero-list/page.tsx or components/HeroList.tsx
'use client';

import { database } from '@/lib/firebase';
import { ref, get } from 'firebase/database';
import { useEffect, useState } from 'react';

type Hero = {
  hero_id: number;
  hero_name: string;
};

export default function HeroList() {
  const [heroes, setHeroes] = useState<Hero[]>([]);

  useEffect(() => {
    const fetchHeroes = async () => {
      const heroRef = ref(database, 'hero');
      const snapshot = await get(heroRef);
      if (snapshot.exists()) {
        const data = snapshot.val();
        const heroesArray = Object.values(data) as Hero[];
        setHeroes(heroesArray);
      }
    };

    fetchHeroes();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Hero List</h1>
      <ul className="list-disc pl-5">
        {heroes.map((hero) => (
          <li key={hero.hero_id}>{hero.hero_name}</li>
        ))}
      </ul>
    </div>
  );
}
