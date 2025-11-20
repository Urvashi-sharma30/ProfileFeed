/**
 * Header Component
 * - Visual header showing avatar, name, bio and stats
 * - Pure view layer only
 */

import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";

export default function Header({ profile }) {
  const { avatar, name, bio, posts, followers, following } = profile;
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={{ uri: avatar }} style={styles.avatar} />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.bio} numberOfLines={3}>
            {bio}
          </Text>
        </View>
      </View>

      <View style={styles.stats}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>{posts}</Text>
          <Text style={styles.statLabel}>Posts</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>{followers}</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>{following}</Text>
          <Text style={styles.statLabel}>Following</Text>
        </View>
      </View>
    </View>
  );
}
