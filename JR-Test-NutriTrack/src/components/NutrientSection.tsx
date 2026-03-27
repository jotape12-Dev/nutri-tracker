import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NutrientInfo } from '../types';
import NutrientBar from './NutrientRow';

interface NutrientSectionProps {
  nutrients: NutrientInfo[];
}

const NutrientSection: React.FC<NutrientSectionProps> = ({ nutrients }) => (
  <View style={styles.container}>
    {nutrients.map((nutrient) => (
      <NutrientBar key={nutrient.label} nutrient={nutrient} />
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 16,
  },
});

export default NutrientSection;