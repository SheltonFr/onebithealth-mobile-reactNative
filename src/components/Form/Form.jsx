import React, { useState } from 'react'
import { TextInput, View, Text, Button } from 'react-native'
import ResultImc from './ResultImc/ResultImc'

export default function Form() {




    return (
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                    placeholder='Ex. 1.75'
                    keyboardType='numeric'
                />

                <Text>Peso</Text>
                <TextInput
                    placeholder='Ex. 75.58'
                    keyboardType='numeric'
                />

                <Button title='Calcular IMC' />
            </View>

            <ResultImc resultImc={imc} messageResultImc={messageImc} />
        </View>
    )
}
