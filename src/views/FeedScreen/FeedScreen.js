/**
 * FeedScreen
 * - Renders FlatList for given data
 * - Uses hooks useViewability & useAutoplay to control which video plays
 */

import React, { useCallback, useMemo, useState } from "react";
import { FlatList, View, Text } from "react-native";
import Card from "../../components/Card/Card";
import useViewability from "../../hooks/useViewability";
import useMultiAutoplay from "../../hooks/useMultiAutoplay";
import useConnectionQuality from "../../hooks/useConnectionQuality";
import styles from "./styles";

export default function FeedScreen({ data = [] }) {
  const [visibleIds, setVisibleIds] = useState([]);
  const { isLowBandwidth } = useConnectionQuality();
  const { activeVideoId, setActiveVideoId } = useMultiAutoplay();

  const handleViewableChange = useCallback(
    (viewableItems) => {
      if (!Array.isArray(viewableItems)) return;
      const ids = viewableItems
        .filter((v) => v?.item?.id)
        .map((v) => v.item.id);

      setVisibleIds(ids);

      if (isLowBandwidth) {
        // Do not autoplay when connection is slow
        return;
      }

      setActiveVideoId(ids);
    },
    [isLowBandwidth, setActiveVideoId]
  );

  const { viewabilityConfig, onViewableItemsChanged } = useViewability(
    (viewableItems) => handleViewableChange(viewableItems)
  );

  const renderItem = useCallback(
    ({ item }) => (
      <Card
        item={item}
        isActive={activeVideoId.includes(item.id)}
        isVisible={visibleIds.includes(item.id)}
        autoplayDisabled={isLowBandwidth}
      />
    ),
    [activeVideoId, visibleIds, isLowBandwidth]
  );

  const keyExtractor = useCallback((item) => item.id, []);

  const memoizedData = useMemo(() => data, [data]);

  const renderEmpty = useCallback(
    () => (
      <View style={styles.emptyState}>
        <Text style={styles.emptyTitle}>No content available</Text>
        <Text style={styles.emptySubtitle}>Check back again later.</Text>
      </View>
    ),
    []
  );

  return (
    <FlatList
      data={memoizedData}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      nestedScrollEnabled
      contentContainerStyle={styles.container}
      initialNumToRender={5}
      maxToRenderPerBatch={10}
      windowSize={12}
      removeClippedSubviews
      viewabilityConfig={viewabilityConfig}
      onViewableItemsChanged={onViewableItemsChanged}
      ListEmptyComponent={renderEmpty}
      scrollEventThrottle={16}
    />
  );
}
