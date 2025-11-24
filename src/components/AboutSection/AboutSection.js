import React from "react";
import { Linking, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export default function AboutSection({ company, description, email, phone, website, location }) {
  const handleLinkPress = (url) => {
    if (url) {
      Linking.openURL(url).catch(() => {});
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.company}>{company}</Text>
      <Text style={styles.description}>{description}</Text>

      <View style={styles.meta}>
        <Text style={styles.metaLabel}>Location</Text>
        <Text style={styles.metaValue}>{location}</Text>
      </View>

      <View style={styles.meta}>
        <Text style={styles.metaLabel}>Email</Text>
        <Text style={styles.metaValue}>{email}</Text>
      </View>

      <View style={styles.meta}>
        <Text style={styles.metaLabel}>Phone</Text>
        <Text style={styles.metaValue}>{phone}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => handleLinkPress(`mailto:${email}`)}>
        <Text style={styles.buttonText}>Contact via Email</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonSecondary} onPress={() => handleLinkPress(website)}>
        <Text style={styles.buttonSecondaryText}>Visit Website</Text>
      </TouchableOpacity>
    </View>
  );
}

