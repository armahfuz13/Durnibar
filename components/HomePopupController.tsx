'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { MembersBlockedPopup } from './MembersBlockedPopup';

const PopupLogic = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const blocked = searchParams.get('membersBlocked');
    if (blocked === 'true') {
      // Small timeout to satisfy linter and ensure clean render cycle
      const timeout = setTimeout(() => {
        setShowPopup(true);
        
        // Remove query param
        const currentParams = new URLSearchParams(searchParams.toString());
        currentParams.delete('membersBlocked');
        const newUrl = currentParams.toString() ? `/?${currentParams.toString()}` : '/';
        router.replace(newUrl);
      }, 0);
      return () => clearTimeout(timeout);
    }
  }, [searchParams, router]);

  return (
    <MembersBlockedPopup 
      isOpen={showPopup} 
      onClose={() => setShowPopup(false)} 
    />
  );
};

export const HomePopupController = () => {
  return (
    <Suspense fallback={null}>
      <PopupLogic />
    </Suspense>
  );
};
