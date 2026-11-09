'use client';

import { useState, useCallback } from 'react';

export interface UseDisclosureReturn {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  setIsOpen: (isOpen: boolean) => void;
}

export function useDisclosure(initialState = false): UseDisclosureReturn {
  const [isOpen, setIsOpenState] = useState(initialState);

  const onOpen = useCallback(() => setIsOpenState(true), []);
  const onClose = useCallback(() => setIsOpenState(false), []);
  const onToggle = useCallback(() => setIsOpenState((prev) => !prev), []);
  const setIsOpen = useCallback((state: boolean) => setIsOpenState(state), []);

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
    setIsOpen,
  };
}
