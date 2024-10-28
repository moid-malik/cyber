'use client';
import styles from './page.module.css';
import Cards from './cards/Cards';
import { useSearchParams } from 'next/navigation';
import React, { Suspense } from 'react';

const PageContent = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';

  return (
    <>
      <div className={styles.indicator}>
        <p>Showing results for: <strong>{query}</strong></p>
      </div>
      <div className={styles.container}>
        <div className={styles.productscards}>
          <Cards query={query} />
        </div>
      </div>
    </>
  );
};

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageContent />
    </Suspense>
  );
};

export default Page;
