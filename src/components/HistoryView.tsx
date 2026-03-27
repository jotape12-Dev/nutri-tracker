import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { historyData } from '../data/mockData';

const HistoryView: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>PAST REVIEWS</Text>
      
      {historyData.map((item) => (
        <View key={item.id} style={styles.historyCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.dateText}>{item.date}</Text>
            <View style={[
              styles.statusBadge, 
              { backgroundColor: item.consumed <= item.goal ? '#E8F5E9' : '#FFEBEE' }
            ]}>
              <Text style={[
                styles.statusText,
                { color: item.consumed <= item.goal ? '#2E7D32' : '#C62828' }
              ]}>
                {item.consumed <= item.goal ? 'GOAL MET' : 'OVER GOAL'}
              </Text>
            </View>
          </View>
          
          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={styles.statLabel}>Consumed</Text>
              <Text style={styles.statValue}>{item.consumed} <Text style={styles.unit}>kcal</Text></Text>
            </View>
            
            <View style={styles.divider} />
            
            <View style={styles.statBox}>
              <Text style={styles.statLabel}>Achievement</Text>
              <Text style={styles.statValue}>{item.percentage}%</Text>
            </View>
          </View>
          
          {/* Progress bar visual */}
          <View style={styles.progressBg}>
            <View style={[
              styles.progressFill, 
              { 
                width: `${Math.min(item.percentage, 100)}%`,
                backgroundColor: item.consumed <= item.goal ? '#40C77D' : '#FF5252' 
              }
            ]} />
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333',
    marginLeft: 20,
    marginBottom: 16,
    letterSpacing: 1,
  },
  historyCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 18,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  dateText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222',
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
  },
  statusText: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  statBox: {
    flex: 1,
  },
  statLabel: {
    fontSize: 12,
    color: '#888',
    marginBottom: 4,
  },
  statValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
  },
  unit: {
    fontSize: 12,
    fontWeight: 'normal',
    color: '#666',
  },
  divider: {
    width: 1,
    height: 30,
    backgroundColor: '#EEE',
    marginHorizontal: 15,
  },
  progressBg: {
    height: 6,
    backgroundColor: '#F5F5F5',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
});

export default HistoryView;
