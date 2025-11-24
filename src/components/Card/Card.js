/**
 * Card Component
 * - Presents image, video and description.
 * - Controlled by parent via `isActive` to autoplay/pause.
 */

import React, { useEffect, useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import styles from "./styles";

export default function Card({ item, isActive, autoplayDisabled = false, isVisible = true }) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [manualPlay, setManualPlay] = useState(false);

  useEffect(() => {
    if (!isVisible && manualPlay) {
      setManualPlay(false);
    }
  }, [isVisible, manualPlay]);

  useEffect(() => {
    if (!autoplayDisabled && manualPlay) {
      setManualPlay(false);
    }
  }, [autoplayDisabled, manualPlay]);

  const shouldPlay = autoplayDisabled ? manualPlay && isVisible : isActive;

  const handleManualToggle = () => {
    setManualPlay((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      {item?.image ? (
        <Image source={{ uri: item.image }} style={styles.image} />
      ) : (
        <View style={[styles.image, styles.imagePlaceholder]} />
      )}

      <View style={styles.videoContainer}>
        <VideoPlayer
          sourceUri={item.video}
          paused={!shouldPlay}
          onLoad={() => setVideoLoaded(true)}
        />
        {!videoLoaded && (
          <View style={styles.loadingOverlay}>
            <Text style={styles.loadingText}>Buffering video...</Text>
          </View>
        )}
        {autoplayDisabled && !manualPlay && (
          <TouchableOpacity style={styles.fallbackOverlay} onPress={handleManualToggle} activeOpacity={0.85}>
            <Text style={styles.fallbackTitle}>Tap to play</Text>
            <Text style={styles.fallbackSubtitle}>Autoplay paused on low bandwidth</Text>
          </TouchableOpacity>
        )}
        {autoplayDisabled && manualPlay && (
          <TouchableOpacity style={styles.fallbackBadge} onPress={handleManualToggle} activeOpacity={0.85}>
            <Text style={styles.fallbackBadgeText}>Stop playback</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.body}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.desc} numberOfLines={3}>
          {item.description}
        </Text>
        <TouchableOpacity style={styles.action}>
          <Text style={styles.actionText}>View</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
