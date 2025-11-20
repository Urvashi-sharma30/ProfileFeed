/**
 * VideoController - contains logic to pick which video should autoplay based on viewable items.
 */

export const VideoController = {
  /**
   * Choose active item from viewableItems array.
   * Current simple approach: pick the viewable item closest to the center by index.
   */
  pickActiveFromViewable(viewableItems) {
    if (!viewableItems || viewableItems.length === 0) return null;
    // Prefer the item with highest visibility (the API gives us viewableItems in descending visibility order sometimes)
    return viewableItems[0]?.item?.id ?? null;
  }
};
