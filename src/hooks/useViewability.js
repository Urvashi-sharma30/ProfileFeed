/**
 * useViewability
 * Hook returning viewabilityConfig and a stable onViewableItemsChanged handler.
 *
 * viewAreaCoveragePercentThreshold is set to 30 to match requirements.
 */

import { useRef, useCallback } from "react";

export default function useViewability(onChange) {
  const viewabilityConfig = { viewAreaCoveragePercentThreshold: 30, waitForInteraction: false };

  const onViewableItemsChanged = useRef(
    ({ viewableItems, changed }) => {
      onChange && onChange(viewableItems, changed);
    }
  ).current;

  // ensure stable references
  return { viewabilityConfig, onViewableItemsChanged: useCallback(onViewableItemsChanged, []) };
}
