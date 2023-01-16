import React from 'react'
import { View, Text, Share, TouchableOpacity, Alert } from 'react-native'
import styles from './style'

export default function ResultImc({ messageResultImc, resultImc }) {

    const onShare = async () => {
        Alert.alert('Share Alert', 'Do you wanna share your Imc?',
            // alert buttons
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },

                {
                    text: 'Share',
                    onPress: async () => {
                        await Share.share({
                            message: 'Meu Imc hoje é: ' + resultImc
                        })
                    }
                }
            ],
            // options
            {
                cancelable: true, // close alert modal by touching anywhere on the screen
            }
        )
    }

    return (
        <View>
            <View style={styles.shareButtomContainer}>
                {resultImc &&
                    <TouchableOpacity
                        onPress={onShare}
                        style={styles.shareButtom}
                    >
                        <Text style={styles.buttomText}>Share</Text>
                    </TouchableOpacity>
                }
            </View>
            <Text style={styles.message}>{messageResultImc}</Text>
            <Text style={styles.result}>{resultImc}</Text>
        </View>
    )
}
