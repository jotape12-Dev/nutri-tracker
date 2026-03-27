# NutriTrack 🍃

NutriTrack is a premium nutrition tracking mobile application built with **React Native CLI**. It offers a clean, high-fidelity user interface for monitoring daily caloric intake, macronutrients, and meal history.

## 🚀 Key Features

- **Dynamic Calorie Monitoring**: Visual progress ring calculating real-time 'Kcal Left' based on daily goals.
- **Macronutrient Breakdown**: High-precision progress bars for Protein, Carbs, and Fats.
- **Meal Management**: Organized view of daily meals with individual calorie counts.
- **Comprehensive Navigation**:
  - **Today**: Current progress and meal log.
  - **History**: Review past performance with interactive achievement badges.
  - **Foods**: Searchable product database with detailed nutritional data.
  - **Settings**: Personalized goal management and app preferences.

## 🛠️ Technical Stack

- **Framework**: React Native CLI (TypeScript)
- **Styling**: Vanilla StyleSheet (Platform-specific optimizations)
- **Graphics**: `react-native-svg` (for performant, declarative UI components)
- **Icons**: Custom SVG implementation for zero-dependency portability.
- **Environment**: Optimized for iOS (Simulator/Device) and Android.

## 📦 Getting Started

### Prerequisites
- Node.js >= 22.11.0
- React Native Environment (Xcode / Android Studio)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/jotape12-Dev/nutri-tracker.git
   cd JR-Test-NutriTrack
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run on iOS:
   ```bash
   npx react-native run-ios
   ```
4. Run on Android:
   ```bash
   npx react-native run-android
   ```

## 🧠 Architecture Decisions

For this project, I prioritized **Deep Knowledge over Library Reliance**:
- **Custom Navigation**: Implemented high-performance tab switching using React State to demonstrate mastery of lifecycle and conditional rendering.
- **SVG Math**: Created the calorie ring from scratch using SVG path geometry to avoid heavy image assets and ensure sharp rendering at any resolution.
- **Dual SafeArea Strategy**: Solved complex iOS status bar color bleeding using a unique tiered `SafeAreaView` architecture.

---
Built with ❤️ by [Jotape Dev](https://github.com/jotape12-Dev)
