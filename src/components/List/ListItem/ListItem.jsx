import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'

export default function ListItem({ result }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Resultado IMC =</Text>
            <Text style={styles.resultText}>{result}</Text>
        </View>
    )
}