/**
 * VideoPlayer component
 * - Wraps the actual video player lib (react-native-video by default).
 * - Provides props: sourceUri, paused, onBuffer, onLoad, style
 * - Swap the Video import if you prefer another player implementation.
 */

import React from "react";
import { View } from "react-native";
import Video from "react-native-video";
import styles from "./styles";

export default function VideoPlayer({ sourceUri, paused = true, style, onLoad, onBuffer }) {
  if (!sourceUri) return null;
  return (
    <View style={[styles.wrapper, style]}>
      <Video
        source={{ uri: sourceUri }}
        style={styles.video}
        resizeMode="cover"
        paused={paused}
        repeat
        muted
        onLoad={onLoad}
        onBuffer={onBuffer}
        // add other props as needed (rate, volume, etc)
      />
    </View>
  );
}
