/**
 * useMultipleAutoplay
 *
 * Keeps the same destructuring shape as useAutoplay:
 *   const { activeVideoId, setActiveVideoId, viewabilityConfig, onViewableItemsChanged } = useMultipleAutoplay();
 *
 * But `activeVideoId` is an ARRAY of currently-active ids (multiple possible).
 * - viewability threshold: 30% visible (itemVisiblePercentThreshold)
 * - onViewableItemsChanged updates the active list automatically
 *
 * This allows you to swap useAutoplay -> useMultipleAutoplay with minimal changes.
 */

import { useState, useCallback, useRef } from "react";

export default function useMultipleAutoplay({
  thresholdPercent = 30, // percent of item that must be visible to be considered active
} = {}) {
  // activeVideoId keeps same name as original hook for drop-in replacement,
  // but is an array of ids (multiple active items).
  const [activeVideoId, setActiveVideoId] = useState([]); // array of ids

  // stable ref to avoid re-creating handler on every render
  const handlerRef = useRef(null);

  // viewability config for FlatList:
  // React Native supports either itemVisiblePercentThreshold or viewAreaCoveragePercentThreshold.
  // itemVisiblePercentThreshold means "X% of item must be visible".
  const viewabilityConfig = {
    itemVisiblePercentThreshold: thresholdPercent,
    waitForInteraction: false,
  };

  // onViewableItemsChanged handler: compute visible ids and set state
  const onViewableItemsChanged = useCallback(({ viewableItems }) => {
    // viewableItems is an array of objects like { item, key, index, isViewable, ... }
    if (!viewableItems || viewableItems.length === 0) {
      // clear active ids if nothing visible
      setActiveVideoId([]);
      return;
    }

    // Collect IDs of items that are viewable (they already meet threshold)
    const visibleIds = viewableItems
      .filter((v) => v.isViewable && v.item && v.item.id)
      .map((v) => v.item.id);

    // Deduplicate just in case:
    const uniqueIds = Array.from(new Set(visibleIds));

    setActiveVideoId(uniqueIds);
  }, []);

  // Expose a setter that accepts either an array or single id (for parity with original API)
  const setActive = useCallback((val) => {
    if (Array.isArray(val)) {
      setActiveVideoId(val);
    } else if (val === null || val === undefined) {
      setActiveVideoId([]);
    } else {
      // If user passes a single id, convert to single-element array
      setActiveVideoId([val]);
    }
  }, []);

  // keep a stable ref for FlatList prop wiring (optional)
  handlerRef.current = onViewableItemsChanged;

  return {
    // name kept for drop-in compatibility; now an array of ids
    activeVideoId,
    // setter similar to useAutoplay but can accept array or single id
    setActiveVideoId: setActive,
    // viewability props to pass into FlatList
    viewabilityConfig,
    // pass the stable handler ref (FlatList expects the function itself)
    onViewableItemsChanged: onViewableItemsChanged,
  };
}
