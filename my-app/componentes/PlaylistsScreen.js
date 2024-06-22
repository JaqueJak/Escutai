import React from 'react';
import { View, Text, StyleSheet, FlatList, ImageBackground } from 'react-native';

const songs = [
  { title: 'CHIHIRO - Billie Eilish'},
  { title: 'Cigarette - Shaya Zamora'},
  { title: 'Daylight - David Kushner'},
  { title: 'Dont Say Goodbye - Alok'},
  { title: 'Dont worry be Happy - Bob Marley'},
  { title: 'Innerbloom - RUFUS'},
  { title: 'The Nights - Avicii'},
  { title: 'Watch - Billie Eilish'},
];

export default function PlaylistsScreen() {
  return (
    <ImageBackground
      source={require('../assets/logo.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Minha Playlist</Text>
        <FlatList
          data={songs}
          renderItem={({ item }) => <Text style={styles.song}>{item.title}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff', 
  },
  song: {
    fontSize: 16,
    marginBottom: 10,
    color: '#fff',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});
