import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

interface CalorieRingProps {
  caloriesLeft: number;
  caloriesGoal: number;
}

const SIZE = 140;
const STROKE_WIDTH = 10;
const RADIUS = (SIZE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const CalorieRing: React.FC<CalorieRingProps> = ({ caloriesLeft, caloriesGoal }) => {
  const progress = Math.max(0, Math.min(1, (caloriesGoal - caloriesLeft) / caloriesGoal));
  const strokeDashoffset = CIRCUMFERENCE * (1 - progress);
  const percentage = Math.round(progress * 100);

  return (
    <View style={styles.container}>
      <Text style={styles.percentageLabel}>{percentage}% of daily goal</Text>
      <View style={styles.ringWrapper}>
        <Svg width={SIZE} height={SIZE} style={styles.svg}>
          {/* Background track */}
          <Circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            stroke="#D6EFD8"
            strokeWidth={STROKE_WIDTH}
            fill="none"
          />
          {/* Progress arc */}
          <Circle
            cx={SIZE / 2}
            cy={SIZE / 2}
            r={RADIUS}
            stroke="#40C77D"
            strokeWidth={STROKE_WIDTH}
            fill="none"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            rotation="-90"
            origin={`${SIZE / 2}, ${SIZE / 2}`}
          />
        </Svg>
        <View style={styles.centerContent}>
          <Text style={styles.caloriesText}>{caloriesLeft}</Text>
          <Text style={styles.kcalLabel}>kcal left</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  percentageLabel: {
    fontSize: 11,
    color: '#555',
    marginBottom: 4,
    fontStyle: 'italic',
  },
  ringWrapper: {
    width: SIZE,
    height: SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  svg: {
    position: 'absolute',
  },
  centerContent: {
    alignItems: 'center',
  },
  caloriesText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111',
  },
  kcalLabel: {
    fontSize: 12,
    color: '#666',
  },
});

export default CalorieRing;