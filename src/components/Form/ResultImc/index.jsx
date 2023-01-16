import React from 'react'
import { View, Text } from 'react-native'
import styles from './style'

export default function ResultImc({ messageResultImc, resultImc }) {
    return (
        <View>
            <Text style={styles.message}>{messageResultImc}</Text>
            <Text style={styles.result}>{resultImc}</Text>
        </View>
    )
}
