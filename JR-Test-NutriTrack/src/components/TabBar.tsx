import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { TabName } from '../types';

interface TabBarProps {
  activeTab: TabName;
  onTabPress: (tab: TabName) => void;
}

const TABS: TabName[] = ['TODAY', 'HISTORY', 'FOODS', 'SETTINGS'];

const TabBar: React.FC<TabBarProps> = ({ activeTab, onTabPress }) => (
  <View style={styles.container}>
    {TABS.map((tab) => (
      <TouchableOpacity
        key={tab}
        style={styles.tab}
        onPress={() => onTabPress(tab)}
        activeOpacity={0.7}
      >
        <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
          {tab}
        </Text>
        {activeTab === tab && <View style={styles.indicator} />}
      </TouchableOpacity>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 0,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 14,
  },
  tabText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#999',
    letterSpacing: 0.6,
  },
  activeTabText: {
    color: '#40C77D',
  },
  indicator: {
    position: 'absolute',
    bottom: 0,
    height: 2,
    width: '60%',
    backgroundColor: '#40C77D',
    borderRadius: 2,
  },
});

export default TabBar;