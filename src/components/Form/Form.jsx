import React, { useState } from 'react'
import { TextInput, View, Text, Button } from 'react-native'
import ResultImc from './ResultImc/ResultImc'

export default function Form() {


    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [textButton, setTextButton] = useState('Calcular')
    const [imc, setImc] = useState(null);
    const [messageImc, setMessageImc] = useState('Preencha o peso e a altura');


    function imcCalculator() {
        return setImc((weight / (height * height)).toFixed(2));
    }

    function handleButtonClick() {
        if (weight != null && height != null) {
            imcCalculator();
            setHeight(null);
            setWeight(null);
            setMessageImc(`Seu Imc é: `)
            setTextButton('Calcular Novamente')
        } else {
            setImc(null);
            setTextButton('Calcular');
            setMessageImc('Preencha o peso e a altura');
        }
    }

    return (
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                    placeholder='Ex. 1.75'
                    keyboardType='numeric'
                    value={height}
                    onChangeText={setHeight}
                />

                <Text>Peso</Text>
                <TextInput
                    placeholder='Ex. 75.58'
                    keyboardType='numeric'
                    value={weight}
                    onChangeText={setWeight}
                />

                <Button title={textButton} onPress={handleButtonClick} />
            </View>

            <ResultImc resultImc={imc} messageResultImc={messageImc} />
        </View>
    )
}
