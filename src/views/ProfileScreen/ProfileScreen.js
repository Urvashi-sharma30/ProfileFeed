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
import ImageGrid from "../../components/ImageGrid/ImageGrid";
import AboutSection from "../../components/AboutSection/AboutSection";

import { ProfileController } from "../../controllers/ProfileController";
import { FeedController } from "../../controllers/FeedController";
import styles from "./styles";

export default function ProfileScreen() {
  const [activeTab, setActiveTab] = useState(0);
  const profile = useMemo(() => ProfileController.getMockProfile(), []);
  const posts = useMemo(() => FeedController.generateMockData(12, "Post"), []);
  const videos = useMemo(() => FeedController.generateMockData(12, "Video"), []);
  const tagged = useMemo(() => FeedController.generateMockData(8, "Tagged"), []);

  const aboutInfo = useMemo(
    () => ({
      company: "Mobulous Technologies Pvt Ltd.",
      description:
        "We craft award-winning mobile products with premium UI/UX, high performance engineering and thoughtful product strategy.",
      email: "hello@mobulous.com",
      phone: "+91 99100 00000",
      website: "https://www.mobulous.com",
      location: "Noida, India",
    }),
    []
  );

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <ImageGrid
            data={posts}
            title="Recent Posts"
            subtitle="A curated grid inspired by Instagram"
            testID="posts-grid"
          />
        );
      case 1:
        return <FeedScreen data={videos} />;
      case 2:
        return (
          <ImageGrid
            data={tagged}
            title="Tagged Items"
            subtitle="Media where the team is mentioned"
            testID="tagged-grid"
          />
        );
      case 3:
        return <AboutSection {...aboutInfo} />;
      default:
        return <FeedScreen data={videos} />;
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
        {renderContent()}
      </View>
    </ScrollView>
  );
}
