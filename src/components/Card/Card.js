/**
 * Card Component
 * - Presents image, video and description.
 * - Controlled by parent via `isActive` to autoplay/pause.
 */

import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import styles from "./styles";

export default function Card({ item, isActive }) {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <View style={styles.container}>
      {/* Poster image */}
      <Image source={{ uri: item.image }} style={styles.image} />

      {/* Video player: paused when not active */}
      <View style={styles.videoContainer}>
        <VideoPlayer
          sourceUri={item.video}
          paused={!isActive}
          onLoad={() => setVideoLoaded(true)}
        />
        {!videoLoaded && <View style={styles.loadingOverlay}><Text style={styles.loadingText}>Loading...</Text></View>}
      </View>

      {/* Body */}
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
