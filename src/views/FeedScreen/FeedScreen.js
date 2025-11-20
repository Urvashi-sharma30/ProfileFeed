/**
 * FeedScreen
 * - Renders FlatList for given data
 * - Uses hooks useViewability & useAutoplay to control which video plays
 */

import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import Card from '../../components/Card/Card';
import useViewability from '../../hooks/useViewability';
import useMultiAutoplay from '../../hooks/useMultiAutoplay';
import styles from './styles';

export default function FeedScreen({ data = [] }) {

  const { activeVideoId, setActiveVideoId } = useMultiAutoplay();

  const handleViewableChange = useCallback((viewableItems) => {

    // MULTI AUTOPLAY FIX → instead of picking only ONE
    const visibleIds = viewableItems.map(v => v.item.id);
    setActiveVideoId(visibleIds);

  }, [setActiveVideoId]);

  const { viewabilityConfig, onViewableItemsChanged } =
    useViewability((viewableItems) => handleViewableChange(viewableItems));


  const renderItem = useCallback(
    ({ item }) => (
      <Card 
        item={item}
        // FIX — array includes check
        isActive={activeVideoId.includes(item.id)}
      />
    ),
    [activeVideoId]
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(i) => i.id}
      renderItem={renderItem}
      nestedScrollEnabled
      contentContainerStyle={styles.container}
      initialNumToRender={5}
      maxToRenderPerBatch={10}
      windowSize={12}
      removeClippedSubviews={true}
      viewabilityConfig={viewabilityConfig}
      onViewableItemsChanged={onViewableItemsChanged}
    />
  );
}
