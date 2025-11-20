/**
 * FeedController - feed data generation & manipulation
 */

export const FeedController = {
  generateMockData(count = 12, prefix = "Card") {
    return Array.from({ length: count }).map((_, i) => {
      const id = `${prefix.toLowerCase()}-${i}`;
      return {
        id,
        title: `${prefix} Title ${i + 1}`,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sample description for demo.",
        image: `https://picsum.photos/seed/${encodeURIComponent(id)}/800/500`,
        // Use short demo MP4 (replace with production links)
        video: "https://www.w3schools.com/html/mov_bbb.mp4"
      };
    });
  }
};
