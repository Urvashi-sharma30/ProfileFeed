/**
 * useConnectionQuality
 * Detects current network type and flags low-bandwidth scenarios to disable autoplay.
 */

import { useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";

const LOW_CELLULAR_GENERATIONS = ["2g", "3g", "unknown", null, undefined];

export default function useConnectionQuality() {
  const [connection, setConnection] = useState({
    type: "unknown",
    isLowBandwidth: false,
  });

  useEffect(() => {
    const evaluateState = (state) => {
      const { type, isConnected, isInternetReachable, details } = state;
      const cellularGeneration = details?.cellularGeneration;
      const isCellular = type === "cellular";
      const poorCellular = isCellular && LOW_CELLULAR_GENERATIONS.includes(cellularGeneration);
      const offline = type === "none" || type === "unknown" || !isConnected || isInternetReachable === false;
      const isLowBandwidth = offline || poorCellular;

      setConnection({
        type,
        isLowBandwidth,
      });
    };

    const unsubscribe = NetInfo.addEventListener(evaluateState);

    NetInfo.fetch().then(evaluateState).catch(() => {
      setConnection((prev) => ({ ...prev, isLowBandwidth: true }));
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return connection;
}

