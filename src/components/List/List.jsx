import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ListItem from './ListItem/ListItem'
import styles from './style'


export default function List({ data }) {
    return (
        <FlatList
            style={styles.container}
            data={data}
            renderItem={({ item }) => <ListItem result={item.imc} />}
            keyExtractor={item => item.id}
        />
    )
}