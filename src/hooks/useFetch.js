/**
 * useFetch - simple data fetch abstraction (placeholder)
 * In real scenarios replace with fetch/axios and add caching/error handling.
 */

import { useState, useEffect } from "react";

export default function useFetch(fetcher, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetcher();
        if (mounted) setData(res);
      } catch (e) {
        // swallow or log
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => (mounted = false);
  }, deps);
  return { data, loading };
}
