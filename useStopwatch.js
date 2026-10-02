import { StyleSheet, Text, View } from 'react-native';

export default function Stopwatch({ seconds, isRunning }) {
  const formatTime = (total) => {
    const minutes = Math.floor(total / 60);
    const secs = total % 60;
    const mStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const sStr = secs < 10 ? `0${secs}` : `${secs}`;
    return `${mStr}:${sStr}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timeText}>{formatTime(seconds)}</Text>
      <Text style={styles.statusText}>
        {isRunning ? 'Running…' : 'Paused'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 15,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    alignItems: 'center',
  },
  timeText: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  statusText: {
    marginTop: 8,
    fontSize: 18,
    color: '#666666',
  },
});