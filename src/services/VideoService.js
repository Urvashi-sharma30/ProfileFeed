/**
 * VideoService - video-related helpers (caching decisions, headers, prefetch)
 */

export const VideoService = {
  // placeholder: in real app implement prefetching, cache headers, etc.
  shouldAutoplayOnConnection(connectionType = "wifi") {
    // return false for 'cellular' or 'unknown' to avoid heavy data usage
    return connectionType === "wifi" || connectionType === "ethernet";
  }
};
