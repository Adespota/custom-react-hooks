'use client'
import { useState, useEffect } from 'react';

export function useDomainUser() {
  // Lazy state
  const [domainUser, setDomainUser] = useState(() =>
    typeof window !== 'undefined' ? window.location.hostname : ''
  );

  useEffect(() => {
    console.log("Domain user =>", domainUser);
  }, [domainUser]);

  return domainUser;
}
