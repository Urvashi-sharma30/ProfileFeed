/**
 * useViewability
 * Hook returning viewabilityConfig and a stable onViewableItemsChanged handler.
 *
 * viewAreaCoveragePercentThreshold is set to 30 to match requirements.
 */

import { useCallback } from "react";

export default function useViewability(onChange) {
  const viewabilityConfig = {
    itemVisiblePercentThreshold: 30,
    waitForInteraction: false,
    minimumViewTime: 120,
  };

  const onViewableItemsChanged = useCallback(
    ({ viewableItems, changed }) => {
      if (typeof onChange === "function") {
        onChange(viewableItems || [], changed || []);
      }
    },
    [onChange]
  );

  return { viewabilityConfig, onViewableItemsChanged };
}
