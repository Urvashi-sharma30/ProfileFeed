/**
 * useAutoplay
 * Manages the id of the currently active/autoplaying video.
 */

import { useState, useCallback } from "react";

export default function useAutoplay() {
  const [activeVideoId, setActiveVideoId] = useState(null);

  const setActive = useCallback((id) => {
    setActiveVideoId(id);
  }, []);

  return { activeVideoId, setActiveVideoId: setActive };
}
