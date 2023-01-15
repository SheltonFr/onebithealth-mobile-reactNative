import React from 'react'
import { View, Text } from 'react-native'

export default function ResultImc({ messageResultImc, resultImc }) {
    return (
        <View>
            <Text>{messageResultImc}</Text>
            <Text>{resultImc}</Text>
        </View>
    )
}
