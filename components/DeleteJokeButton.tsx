'use client';

import React, { useTransition } from 'react';
import Button from '@/components/ui/Button';
import { deleteJoke } from '@/data/actions/deleteJoke';

export default function DeleteJokeButton({ jokeid }: { jokeid: string }) {
  const [isPending, startTransition] = useTransition();
  console.log('isPending: ', isPending);

  return (
    <Button
      disabled={isPending}
      onClick={() => {
        startTransition(async () => {
          await deleteJoke(jokeid);
        });
      }}
    >
      {isPending ? 'Deleting...' : 'Delete'}
    </Button>
  );
}
