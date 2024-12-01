import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Alert } from 'react-native';

export default function NotificationScreen({ navigation }) {
  const [isPushNotificationsEnabled, setIsPushNotificationsEnabled] = useState(true);
  const [isEmailNotificationsEnabled, setIsEmailNotificationsEnabled] = useState(true);
  const [isSMSNotificationsEnabled, setIsSMSNotificationsEnabled] = useState(false);

  // Toggle handlers
  const handlePushToggle = () => setIsPushNotificationsEnabled(prevState => !prevState);
  const handleEmailToggle = () => setIsEmailNotificationsEnabled(prevState => !prevState);
  const handleSMSToggle = () => setIsSMSNotificationsEnabled(prevState => !prevState);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notification Settings</Text>

      {/* Push Notifications */}
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Push Notifications</Text>
        <Switch
          value={isPushNotificationsEnabled}
          onValueChange={handlePushToggle}
          thumbColor="#fff"
          trackColor={{ false: '#767577', true: '#81b0ff' }}
        />
      </View>

      {/* Email Notifications */}
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Email Notifications</Text>
        <Switch
          value={isEmailNotificationsEnabled}
          onValueChange={handleEmailToggle}
          thumbColor="#fff"
          trackColor={{ false: '#767577', true: '#81b0ff' }}
        />
      </View>

      {/* SMS Notifications */}
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>SMS Notifications</Text>
        <Switch
          value={isSMSNotificationsEnabled}
          onValueChange={handleSMSToggle}
          thumbColor="#fff"
          trackColor={{ false: '#767577', true: '#81b0ff' }}
        />
      </View>

      {/* Notification Preferences */}
      <Text style={styles.preferenceTitle}>Notification Preferences</Text>

      <TouchableOpacity style={styles.preferenceItem} onPress={() => Alert.alert('Sound Settings')}>
        <Text style={styles.preferenceText}>Sound</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.preferenceItem} onPress={() => Alert.alert('Vibration Settings')}>
        <Text style={styles.preferenceText}>Vibration</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.preferenceItem} onPress={() => Alert.alert('Do Not Disturb')}>
        <Text style={styles.preferenceText}>Do Not Disturb</Text>
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navText}>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('SafetyGuidelines')}>
          <Text style={styles.navText}>📂</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Notification')}>
          <Text style={styles.navText}>🔔</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.navText}>⚙️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  settingText: {
    fontSize: 16,
    color: '#333',
  },
  preferenceTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 30,
    marginBottom: 10,
  },
  preferenceItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  preferenceText: {
    fontSize: 16,
    color: '#333',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  navItem: {
    alignItems: 'center',
    padding: 5,
  },
  navText: {
    fontSize: 18,
    color: '#555',
  },
});
