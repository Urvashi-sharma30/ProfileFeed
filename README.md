# MyProject (React Native CLI)

This project now runs as a standard React Native app that relies solely on the
React Native CLI tooling.

## Requirements
- Node 20+
- Android Studio (for Android builds) and/or Xcode (for iOS builds)
- Watchman (macOS optional but recommended)

## Common scripts
- `npm run start` – launch Metro bundler
- `npm run android` – build and install on an Android emulator/device
- `npm run ios` – build and install on an iOS simulator/device (macOS only)

## Notes
- Entry point is `index.js`, which registers `App` via `AppRegistry`.
- Update native assets/icons directly in the `android` and `ios` folders as
  needed.
