# NutriTrack: Technical Interview Study Guide

This document is your mental map for the technical interview. It explains the what, how, and why of every architectural decision and line of code in the **JR-Test-NutriTrack** project.

---

## 1. General Architecture (The Big Picture)
The project follows a **Modular Component Architecture** based on **Separation of Concerns (SoC)** and is built using **React Native CLI (Pure)**.

*   **Smart Components (Screens):** Handle logic, state management, and data orchestration (e.g., `DashboardScreen`).
*   **Dumb Components (Components):** Purely UI-focused, receiving all data and callbacks via Props for maximum reusability.
*   **Data Layer (Mock Data):** Data is isolated in `src/data/mockData.ts`. Replacing it with a real API (Axios/Supabase) only requires changing one file.

---

## 2. Directory Structure & File Responsibilities

### 📂 Root
*   **App.tsx**: The entry point. It wraps the application and renders the main `DashboardScreen`.
*   **index.js**: Registers the root component, initializing the React Native environment.

### 📂 src/types/
*   **index.ts**: Contains all TypeScript interfaces (`NutrientInfo`, `Meal`, `DailyStats`). This ensures **Type Safety** across the project and prevents common runtime crashes.

### 📂 src/screens/
*   **DashboardScreen.tsx**: The "Orchestrator". Manages the `activeTab` state and uses conditional rendering to swap views. It handles the high-level Flexbox layout and the dual-background logic.

### 📂 src/components/ (UI Kit)
*   **CalorieRing.tsx**: A high-complexity component. Uses `react-native-svg` to draw a progress ring. it uses stroke math (`strokeDasharray`) to calculate progress based on percentage.
*   **NutrientSection.tsx & NutrientRow.tsx**: Modular bars that display macronutrients. They use dynamic width calculations to visualize goals.
*   **TabBar.tsx**: A custom interactive navigation bar. Built using `TouchableOpacity` and state-based styling for the active indicator.
*   **MaterialCommunityIcons.tsx**: An **SVG Icon Shim**. 
    *   *Why?* To avoid the performance overhead and potential linking issues of generic icon libraries in a CLI project, providing a lightweight, pixel-perfect "leaf" icon.
*   **HistoryView.tsx, FoodsView.tsx, SettingsView.tsx**: Encapsulated logic for sub-sections, keeping the main screen clean and readable.

---

## 3. Key Interview Talking Points (Prepare to Answer)

### A. Navigation Without External Libraries
**Question:** *"Why didn't you use React Navigation?"*  
**Answer:** *"For this specific challenge, I chose to implement a custom navigation system using React State. This demonstrates a deep understanding of core React principles like conditional rendering and state lifting. It results in a smaller bundle size and proves I can build custom routing logic without relying on third-party dependencies when efficiency is key."*

### B. The Circular Progress Ring (SVG Pathing)
**Talking Point:** *"I leveraged `react-native-svg` to create a performant, declarative UI. I calculated the circle's circumference using 2 * PI * R to manipulate the `strokeDasharray`. This allowed me to create a smooth progress effect that works consistently across both iOS and Android without using heavy images."*

### C. Layout and SafeArea (The Dual-Container Trick)
**Talking Point:** *"To achieve the premium look where the top green header is flush with the status bar, I used a dual-SafeAreaView pattern. One `SafeAreaView` with `flex: 0` handles the top green area, and a second `SafeAreaView` with `flex: 1` wraps the rest of the app in a light gray background. This prevents 'color leaking' on devices with notches or Dynamic Islands."*

### D. TypeScript and Scalability
**Talking Point:** *"The project is 100% type-safe. By defining strict interfaces and using TypeScript's strict mode, the code is self-documenting and extremely easy to refactor. If we integrate a backend later, we simply update the types, and the IDE will pinpoint exactly where the UI might break."*

---

## 4. Performance & Design Decisions

*   **Performance:** All graphics are SVG-based, ensuring they look sharp at any screen density (Retina/QHD) without the memory cost of high-res PNGs.
*   **Design Tokens:** Consistent use of a curated color palette (`#40C77D` for primary green) and an 8px spacing grid for visual harmony.
*   **Android Polish:** Implemented `elevation` for Android shadows and handled `Platform` specific offsets for the status bar and date positioning.

---

**Good luck with your interview! You've got this. 🚀**
