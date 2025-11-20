/**
 * Tabs component
 * - Stateless visual tabs with callback on change.
 * - Designed to be a sticky header in the ScrollView.
 */

import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";

const TABS = [
  { id: "posts", title: "Posts" },
  { id: "videos", title: "Videos" },
  { id: "tagged", title: "Tagged" },
  { id: "about", title: "About" }
];

export default function Tabs({ activeIndex = 0, onChange }) {
  return (
    <View style={styles.container}>
      {TABS.map((tab, idx) => {
        const isActive = idx === activeIndex;
        return (
          <TouchableOpacity
            key={tab.id}
            style={styles.tab}
            onPress={() => onChange(idx)}
            activeOpacity={0.75}
          >
            <Text style={[styles.text, isActive && styles.textActive]}>{tab.title}</Text>
            {isActive && <View style={styles.underline} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
