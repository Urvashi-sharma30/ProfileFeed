

import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function Header({ profile }) {
  const { avatar, name, username, bio, posts, followers, following, location } = profile;
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={{ uri: avatar }} style={styles.avatar} />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          {username && <Text style={styles.username}>@{username}</Text>}
          <Text style={styles.bio} numberOfLines={3}>
            {bio}
          </Text>
          {location && <Text style={styles.location}>{location}</Text>}
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

      <View style={styles.actions}>
        <TouchableOpacity style={styles.primaryAction}>
          <Text style={styles.primaryActionText}>Follow</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryAction}>
          <Text style={styles.secondaryActionText}>Message</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
