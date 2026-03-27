import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

const SettingsView: React.FC = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <View style={styles.avatarPlaceholder}>
          <Text style={styles.avatarInitial}>J</Text>
        </View>
        <Text style={styles.userName}>Jotape Dev</Text>
        <Text style={styles.userEmail}>jotape@nutritrack.app</Text>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Goals Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>DAILY GOALS</Text>

        <View style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <View style={[styles.iconBox, { backgroundColor: '#E8F5E9' }]}>
              <Text style={styles.iconEm}>🔥</Text>
            </View>
            <Text style={styles.menuLabel}>Calories</Text>
          </View>
          <Text style={styles.menuValue}>2000 kcal</Text>
        </View>

        <View style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <View style={[styles.iconBox, { backgroundColor: '#E3F2FD' }]}>
              <Text style={styles.iconEm}>🥩</Text>
            </View>
            <Text style={styles.menuLabel}>Protein</Text>
          </View>
          <Text style={styles.menuValue}>120g</Text>
        </View>

        <View style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <View style={[styles.iconBox, { backgroundColor: '#FFF3E0' }]}>
              <Text style={styles.iconEm}>🍞</Text>
            </View>
            <Text style={styles.menuLabel}>Carbs</Text>
          </View>
          <Text style={styles.menuValue}>250g</Text>
        </View>

        <View style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <View style={[styles.iconBox, { backgroundColor: '#FFF3E0' }]}>
              <Text style={styles.iconEm}>🍕</Text>
            </View>
            <Text style={styles.menuLabel}>Fat</Text>
          </View>
          <Text style={styles.menuValue}>70g</Text>
        </View>


      </View>

      {/* App Preferences */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>PREFERENCES</Text>

        <TouchableOpacity style={styles.menuItem}>
          <View style={styles.menuLeft}>
            <Text style={styles.menuLabel}>Weight Unit</Text>
          </View>
          <Text style={styles.menuValue}>Grams (g)</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      <View style={styles.footerSpace} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 18,
    borderRadius: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  avatarPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#40C77D',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  avatarInitial: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFF',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
  },
  userEmail: {
    fontSize: 14,
    color: '#888',
    marginTop: 2,
  },
  editButton: {
    marginTop: 14,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#EEE',
  },
  editButtonText: {
    fontSize: 13,
    color: '#666',
    fontWeight: '600',
  },
  section: {
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '800',
    color: '#999',
    marginBottom: 12,
    letterSpacing: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBox: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  iconEm: {
    fontSize: 18,
  },
  menuLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
  },
  menuValue: {
    fontSize: 14,
    color: '#40C77D',
    fontWeight: '700',
  },
  toggleOn: {
    width: 44,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#40C77D',
    borderWidth: 2,
    borderColor: '#40C77D',
  },
  logoutButton: {
    marginHorizontal: 20,
    padding: 16,
    alignItems: 'center',
    marginBottom: 20,
  },
  logoutText: {
    color: '#FF5252',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footerSpace: {
    height: 60,
  }
});

export default SettingsView;
