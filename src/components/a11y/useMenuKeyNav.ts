import { useEffect, useRef, useCallback, KeyboardEvent } from "react";

interface UseMenuKeyNavOptions {
  isOpen: boolean;
  onClose: () => void;
  itemSelector?: string;
  autoFocus?: boolean;
  returnFocusOnClose?: boolean;
}

export function useMenuKeyNav({
  isOpen,
  onClose,
  itemSelector = '[role="menuitem"]',
  autoFocus = true,
  returnFocusOnClose = true,
}: UseMenuKeyNavOptions) {
  const menuRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLElement>(null);
  const currentFocusIndex = useRef(0);

  // Get all focusable menu items
  const getMenuItems = useCallback((): HTMLElement[] => {
    if (!menuRef.current) return [];
    return Array.from(menuRef.current.querySelectorAll(itemSelector));
  }, [itemSelector]);

  // Set focus to a specific menu item
  const setFocusToItem = useCallback((index: number) => {
    const items = getMenuItems();
    if (items.length === 0) return;

    // Ensure index is within bounds
    const safeIndex = Math.max(0, Math.min(index, items.length - 1));
    currentFocusIndex.current = safeIndex;

    // Update tabIndex for roving tabindex pattern
    items.forEach((item, i) => {
      item.tabIndex = i === safeIndex ? 0 : -1;
    });

    // Focus the item
    items[safeIndex]?.focus();
  }, [getMenuItems]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    const items = getMenuItems();
    if (items.length === 0) return;

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        setFocusToItem(currentFocusIndex.current + 1);
        break;

      case "ArrowUp":
        event.preventDefault();
        setFocusToItem(currentFocusIndex.current - 1);
        break;

      case "Home":
      case "PageUp":
        event.preventDefault();
        setFocusToItem(0);
        break;

      case "End":
      case "PageDown":
        event.preventDefault();
        setFocusToItem(items.length - 1);
        break;

      case "Escape":
        event.preventDefault();
        onClose();
        // Return focus to trigger
        if (returnFocusOnClose && triggerRef.current) {
          triggerRef.current.focus();
        }
        break;

      case "Tab":
        // Allow Tab to naturally move focus out of menu
        // but close the menu when it happens
        setTimeout(() => {
          if (!menuRef.current?.contains(document.activeElement)) {
            onClose();
          }
        }, 0);
        break;

      default:
        // Handle letter key navigation (jump to item starting with that letter)
        if (event.key.length === 1 && !event.metaKey && !event.ctrlKey) {
          const char = event.key.toLowerCase();
          const startIndex = currentFocusIndex.current + 1;

          // Search from current position to end
          let foundIndex = items.slice(startIndex).findIndex(item =>
            item.textContent?.toLowerCase().startsWith(char)
          );

          if (foundIndex !== -1) {
            setFocusToItem(startIndex + foundIndex);
          } else {
            // Search from beginning to current position
            foundIndex = items.slice(0, currentFocusIndex.current).findIndex(item =>
              item.textContent?.toLowerCase().startsWith(char)
            );
            if (foundIndex !== -1) {
              setFocusToItem(foundIndex);
            }
          }
        }
    }
  }, [getMenuItems, setFocusToItem, onClose, returnFocusOnClose]);

  // Handle click outside
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) &&
          triggerRef.current && !triggerRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscapeKey = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        if (returnFocusOnClose && triggerRef.current) {
          triggerRef.current.focus();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, onClose, returnFocusOnClose]);

  // Auto-focus first item when menu opens
  useEffect(() => {
    if (isOpen && autoFocus) {
      // Use setTimeout to ensure DOM is updated
      setTimeout(() => {
        setFocusToItem(0);
      }, 0);
    }
  }, [isOpen, autoFocus, setFocusToItem]);

  // Initialize menu items with proper tabindex
  useEffect(() => {
    if (!isOpen) return;

    const items = getMenuItems();
    items.forEach((item, index) => {
      item.tabIndex = index === 0 ? 0 : -1;
    });
  }, [isOpen, getMenuItems]);

  return {
    menuRef,
    triggerRef,
    handleKeyDown,
    setFocusToItem,
    currentFocusIndex: currentFocusIndex.current,
  };
}

// Helper hook for mobile menu keyboard navigation
export function useMobileMenuKeyNav({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      // Store current focus
      previousFocusRef.current = document.activeElement as HTMLElement;

      // Focus first focusable element in menu
      setTimeout(() => {
        const firstLink = menuRef.current?.querySelector<HTMLElement>(
          'a, button, [tabindex]:not([tabindex="-1"])'
        );
        firstLink?.focus();
      }, 0);
    } else {
      // Restore focus to toggle button when menu closes
      if (previousFocusRef.current === toggleButtonRef.current) {
        toggleButtonRef.current?.focus();
      }
    }
  }, [isOpen]);

  const handleEscape = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
      toggleButtonRef.current?.focus();
    }
  }, [onClose]);

  return {
    menuRef,
    toggleButtonRef,
    handleEscape,
  };
}