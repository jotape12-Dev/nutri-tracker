import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import CalorieRing from '../components/CalorieRing';
import NutrientSection from '../components/NutrientSection';
import MealCard from '../components/MealCard';
import TabBar from '../components/TabBar';
import HistoryView from '../components/HistoryView';
import FoodsView from '../components/FoodsView';
import SettingsView from '../components/SettingsView';
import { meals, dailyStats } from '../data/mockData';
import { TabName } from '../types';

const DashboardScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabName>('TODAY');

  const renderContent = () => {
    switch (activeTab) {
      case 'HISTORY':
        return <HistoryView />;
      case 'FOODS':
        return <FoodsView />;
      case 'SETTINGS':
        return <SettingsView />;
      default:
        return (
          <View style={styles.mealsSection}>
            <Text style={styles.sectionTitle}>MEALS</Text>
            {meals.map((meal) => (
              <MealCard key={meal.id} meal={meal} />
            ))}
            <TouchableOpacity style={styles.addMealButton} activeOpacity={0.8}>
              <View style={styles.plusIconContainer}>
                <Text style={styles.plusIcon}>+</Text>
              </View>
              <Text style={styles.addMealText}>Add Meal</Text>
            </TouchableOpacity>
          </View>
        );
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#E8F5E9" />
      <SafeAreaView style={styles.safeAreaTop} />
      <SafeAreaView style={styles.safeAreaBottom}>
        <View style={styles.container}>
          <View style={styles.topSection}>
            <Text style={styles.dateText}>SUN, FEB 1</Text>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>NutriTrack 🍃</Text>
            </View>

            {/* Summary persistent on Top */}
            <View style={styles.summaryRow}>
              <View style={styles.calorieRingWrapper}>
                <CalorieRing
                  caloriesLeft={dailyStats.caloriesLeft}
                  caloriesGoal={dailyStats.caloriesGoal}
                />
              </View>
              <NutrientSection nutrients={dailyStats.nutrients} />
            </View>
          </View>

          <TabBar activeTab={activeTab} onTabPress={setActiveTab} />

          <ScrollView
            style={styles.scrollView}
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >
            {renderContent()}
          </ScrollView>

          {/* Conditional Floating Action Button (Only on Today) */}
          {activeTab === 'TODAY' && (
            <View style={styles.bottomCtaContainer}>
              <TouchableOpacity style={styles.logFoodButton} activeOpacity={0.85}>
                <Text style={styles.logFoodButtonText}>LOG FOOD</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeAreaTop: { backgroundColor: '#E8F5E9' },
  safeAreaBottom: { flex: 1, backgroundColor: '#F5F5F5' },
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  topSection: { backgroundColor: '#E8F5E9', paddingBottom: 12 },
  dateText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
    letterSpacing: 0.5,
    marginTop: Platform.OS === 'android' ? 12 : 8,
    marginLeft: 20,
  },
  header: { paddingTop: 8, paddingBottom: 16, alignItems: 'center' },
  headerTitle: { fontSize: 30, fontWeight: 'bold', color: '#111' },
  summaryRow: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingBottom: 12 },
  calorieRingWrapper: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  scrollView: { flex: 1 },
  scrollContent: { paddingTop: 16, paddingBottom: 100 },
  mealsSection: { paddingTop: 0 },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333',
    marginLeft: 20,
    marginBottom: 12,
    letterSpacing: 1,
  },
  addMealButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 24,
    marginHorizontal: 18,
    marginTop: 4,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  plusIconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#40C77D',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  plusIcon: { fontSize: 26, color: '#FFFFFF', fontWeight: 'bold', lineHeight: 30 },
  addMealText: { fontSize: 14, fontWeight: '600', color: '#888' },
  bottomCtaContainer: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 32 : 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  logFoodButton: {
    backgroundColor: '#40C77D',
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 52,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
  },
  logFoodButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
    letterSpacing: 1.2,
  },
});

export default DashboardScreen;