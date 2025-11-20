/**
 * ProfileScreen
 * - Compose Header, Tabs (sticky) and content (Feed)
 * - Uses nested ScrollView + stickyHeaderIndices + nested FlatList for per-tab scroll
 */

import React, { useState, useMemo } from "react";
import { ScrollView, View } from "react-native";

import Header from "../../components/Header/Header";
import Tabs from "../../components/Tabs/Tabs";
import FeedScreen from "../FeedScreen/FeedScreen";

import { ProfileController } from "../../controllers/ProfileController";
import { FeedController } from "../../controllers/FeedController";
import styles from "./styles";

export default function ProfileScreen() {
  const [activeTab, setActiveTab] = useState(0);
  const profile = useMemo(() => ProfileController.getMockProfile(), []);
  const posts = useMemo(() => FeedController.generateMockData(12, "Post"), []);
  const videos = useMemo(() => FeedController.generateMockData(12, "Video"), []);
  const tagged = useMemo(() => FeedController.generateMockData(8, "Tagged"), []);
  const about = useMemo(() => [{ id: "about-1", title: "Contact", description: "Email:hello@mobulous.com", image: "", video: "" }], []);

  const getDataForTab = () => {
    switch (activeTab) {
      case 0:
        return posts;
      case 1:
        return videos;
      case 2:
        return tagged;
      case 3:
        return about;
      default:
        return posts;
    }
  };

  return (
    <ScrollView
      style={styles.container}
      nestedScrollEnabled
      stickyHeaderIndices={[1]} // make the Tabs sticky (index within ScrollView children)
    >
      <Header profile={profile} />

      <Tabs activeIndex={activeTab} onChange={setActiveTab} />

      <View style={styles.content}>
        <FeedScreen data={getDataForTab()} />
      </View>
    </ScrollView>
  );
}
