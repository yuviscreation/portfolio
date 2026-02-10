import { useCallback } from 'react';

/**
 * Hook that returns a function to smoothly scroll to a DOM element by its ID.
 * Extracted from Hero component for reusability across navigation elements.
 *
 * @returns {(id: string) => (e?: Event) => void} Curried scroll handler
 */
export default function useScrollToId() {
  return useCallback(
    (id) => (e) => {
      if (e && e.preventDefault) e.preventDefault();
      if (!id) return;
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
    []
  );
}
