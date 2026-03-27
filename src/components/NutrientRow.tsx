import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NutrientInfo } from '../types';

interface NutrientBarProps {
  nutrient: NutrientInfo;
}

const NutrientBar: React.FC<NutrientBarProps> = ({ nutrient }) => {
  const { label, current, goal, unit } = nutrient;
  const progress = Math.min(current / goal, 1);

  return (
    <View style={styles.container}>
      <View style={styles.labelRow}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.values}>
          {current}{unit} / {goal}{unit}
        </Text>
      </View>
      <View style={styles.track}>
        <View style={[styles.fill, { width: `${progress * 100}%` }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#222',
  },
  values: {
    fontSize: 12,
    color: '#555',
  },
  track: {
    height: 8,
    backgroundColor: '#D6EFD8',
    borderRadius: 4,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    backgroundColor: '#40C77D',
    borderRadius: 4,
  },
});

export default NutrientBar;