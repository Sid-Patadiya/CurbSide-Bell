# CurbsideBell-MobileApp

Repository for UMS React Native App

# Create build on Expo

eas build

# Build submission process for ios

eas submit -p ios --latest

# Build submission process for android

eas submit -p android --latest

# Development build for ios and android

eas build --profile development --platform android/ios

# Staging build for ios and android

eas build --profile staging --platform android/ios

# Run development build

npx expo start --dev-client
