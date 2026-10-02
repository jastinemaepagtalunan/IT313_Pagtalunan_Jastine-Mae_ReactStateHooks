import { Button, StyleSheet, Text, View } from 'react-native';

export default function PracticeTracker({ solved, onSolve, onReset }) {
return (
<View style={styles.box}>
<Text style={styles.txt}>Solved: {solved}</Text>
<View style={styles.row}>
<Button title="Solve +1" onPress={onSolve} />
<View style={{width:15}} />
<Button title="Reset" onPress={onReset} color="#888" />
</View>
{solved >= 5 && <Text style={styles.msg}>Great job!</Text>}
</View>
);
}

const styles = StyleSheet.create({
box: { margin: 15, padding: 15, backgroundColor: '#fff', borderRadius: 10 },
txt: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
row: { flexDirection: 'row', marginVertical: 10 },
msg: { marginTop: 12, fontSize: 18, color: '#2ecc71', fontWeight: '600' }
});