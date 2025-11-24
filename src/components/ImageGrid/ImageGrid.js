import React, { useCallback } from "react";
import { FlatList, Image, Text, View } from "react-native";
import styles from "./styles";

export default function ImageGrid({ data = [], title, subtitle, testID }) {
  const renderItem = useCallback(
    ({ item }) => (
      <View style={styles.item}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>
    ),
    []
  );

  return (
    <View style={styles.container} testID={testID}>
      {(title || subtitle) && (
        <View style={styles.heading}>
          {title && <Text style={styles.title}>{title}</Text>}
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
      )}

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        scrollEnabled={false}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
}

