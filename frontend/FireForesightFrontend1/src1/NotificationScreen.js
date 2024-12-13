import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';

export default function NotificationScreen({ navigation }) {
  // Simulated notification data
  const [notifications, setNotifications] = useState([
    { id: '1', title: 'Fire Risk Alert', body: 'Low fire risk detected in Ifrane.' },
    { id: '2', title: 'Reminder', body: 'Check safety guidelines in the app.' },
  ]);

  return (
    <View style={styles.container}>
      {/* Notifications List */}
      <Text style={styles.title}>Notifications</Text>

      {notifications.length > 0 ? (
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.notificationItem}>
              <Text style={styles.notificationTitle}>{item.title}</Text>
              <Text style={styles.notificationBody}>{item.body}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.noNotifications}>No notifications available.</Text>
      )}

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navText}>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('SafetyGuidelines')}>
          <Text style={styles.navText}>📂</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Notification')}>
          <Text style={[styles.navText, styles.activeNavText]}>🔔</Text>
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
    marginBottom: 20,
    color: '#333',
  },
  notificationItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6347',
  },
  notificationBody: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
  noNotifications: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginTop: 20,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Distribute items evenly
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: Dimensions.get('window').width, // Full width of the screen
  },
  navItem: {
    alignItems: 'center',
    flex: 1, // Equal space for each item
  },
  navText: {
    fontSize: 22, // Adjusted size for better visibility
    color: '#555',
  },
  activeNavText: {
    color: '#FF6347', // Highlight active screen with a different color
  },
});
