/**
 * ProfileController - profile data retrieval and formatting
 */

export const ProfileController = {
  getMockProfile() {
    return {
      id: 'user-1',
      name: 'John Doe',
      username: 'john.doe',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      bio: 'Mobile engineer • UI Lover • Coffee fanatic',
      location: 'Noida, India',
      posts: 120,
      followers: 3500,
      following: 980,
    };
  },
};