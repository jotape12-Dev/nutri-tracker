import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Meal } from '../types';

interface MealCardProps {
  meal: Meal;
}

const MealCard: React.FC<MealCardProps> = ({ meal }) => (
  <View style={styles.card}>
    <View style={styles.itemsContainer}>
      {meal.items.map((item, index) => (
        <Text key={index} style={styles.itemText}>{item}</Text>
      ))}
    </View>
    <Text style={styles.calories}>{meal.calories} kcal</Text>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    marginHorizontal: 18,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  itemsContainer: {
    flex: 1,
  },
  itemText: {
    fontSize: 14,
    color: '#222',
    lineHeight: 22,
  },
  calories: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginLeft: 12,
  },
});

export default MealCard;