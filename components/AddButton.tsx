'use client';

import React from 'react';
import { useFormStatus } from 'react-dom';
import Button from './ui/Button';

export default function AddButton() {
  const { pending, data } = useFormStatus();
  console.log('pending from useFormStatus: ', pending);
  if (data?.entries()) {
    for (const pair of data.entries()) {
      console.log('useFormStatus form pairs, pair[0], pair[1]: ', pair[0], pair[1]);
    }
  }

  return (
    <div className="flex justify-end">
      <Button disabled={pending} type="submit">
        {pending ? 'Adding...' : 'Add'}
      </Button>
    </div>
  );
}
