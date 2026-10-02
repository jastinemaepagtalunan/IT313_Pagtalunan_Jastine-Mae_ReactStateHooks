import { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import PracticeTracker from './PracticeTracker';
import Stopwatch from './Stopwatch';
import useStopwatch from './useStopwatch';

export default function LabScreen() {
const [solved, setSolved] = useState(0);
const [isRunning, setIsRunning] = useState(false);
const { seconds } = useStopwatch(isRunning);

const handleSolve = () => setSolved(s => s + 1);
const handleReset = () => setSolved(0);
const handleStart = () => setIsRunning(true);
const handleStop = () => setIsRunning(false);

return (
<View style={styles.container}>
<Stopwatch seconds={seconds} isRunning={isRunning} />
<View style={styles.btns}>
<Button title="Start" onPress={handleStart} color="#2ecc71" />
<View style={{width:15}} />
<Button title="Stop" onPress={handleStop} color="#e74c3c" />
</View>
<PracticeTracker solved={solved} onSolve={handleSolve} onReset={handleReset} />
</View>
);
}

const styles = StyleSheet.create({
container: { flex: 1, paddingTop: 20 },
btns: { flexDirection: 'row', justifyContent: 'center', marginVertical: 10 }
});