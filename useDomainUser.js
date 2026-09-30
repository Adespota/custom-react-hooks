'use client'
import { useState, useEffect } from 'react';

/**
 * Restituisce l'hostname corrente (dominio) da cui l'utente sta visitando l'app.
 * Lato server (SSR) restituisce una stringa vuota, perché `window` non esiste.
 * Ad ogni cambio di valore scrive il dominio in console (utile per il debug).
 *
 * @returns {string} L'hostname corrente, oppure '' se non disponibile.
 */
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
