import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { getJokes } from '@/src/actions/getJokes';
import QueryProvider from './_components/QueryProvider';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demo - React Query',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryFn: getJokes, queryKey: ['jokes'] });

  return (
    <QueryProvider>
      <HydrationBoundary state={dehydrate(queryClient)}>{children}</HydrationBoundary>
    </QueryProvider>
  );
}
