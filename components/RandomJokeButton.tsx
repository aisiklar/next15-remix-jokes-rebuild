'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

export default function RandomJokeButton() {
  const router = useRouter();

  return (
    <button
      className="padding-0 text-left text-yellow hover:underline"
      onClick={() => {
        router.push('/jokes');
        console.log('after router push to /jokes');
        router.refresh();
        console.log('after router refresh');
      }}
    >
      Get random joke
    </button>
  );
}
