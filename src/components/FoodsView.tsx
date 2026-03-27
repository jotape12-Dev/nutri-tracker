import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { foodsData } from '../data/mockData';

const FoodsView: React.FC = () => {
  const [search, setSearch] = useState('');

  const filteredFoods = foodsData.filter(food => 
    food.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search products..."
          placeholderTextColor="#999"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <Text style={styles.sectionTitle}>FREQUENT FOODS</Text>

      {filteredFoods.map((food) => (
        <TouchableOpacity key={food.id} style={styles.foodItem} activeOpacity={0.7}>
          <View style={styles.foodInfo}>
            <Text style={styles.foodName}>{food.name}</Text>
            <Text style={styles.foodMacros}>
              P: {food.protein}g · C: {food.carbs}g · F: {food.fat}g
            </Text>
          </View>
          <View style={styles.calorieBox}>
            <Text style={styles.calorieValue}>{food.calories}</Text>
            <Text style={styles.kcalLabel}>kcal</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
  },
  searchContainer: {
    marginHorizontal: 18,
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 14,
    fontSize: 15,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333',
    marginLeft: 20,
    marginBottom: 12,
    letterSpacing: 1,
  },
  foodItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 18,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  foodInfo: {
    flex: 1,
  },
  foodName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#222',
    marginBottom: 4,
  },
  foodMacros: {
    fontSize: 12,
    color: '#888',
    letterSpacing: 0.2,
  },
  calorieBox: {
    alignItems: 'flex-end',
    marginLeft: 12,
  },
  calorieValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#40C77D',
  },
  kcalLabel: {
    fontSize: 10,
    color: '#AAA',
    marginTop: -2,
    fontWeight: '700',
  },
});

export default FoodsView;
