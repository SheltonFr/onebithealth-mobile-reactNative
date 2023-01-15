import React, { useState } from 'react'
import { TextInput, View, Text, TouchableOpacity } from 'react-native'
import ResultImc from './ResultImc/index'
import styles from './style'

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
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel} >Altura</Text>
                <TextInput
                    placeholder='Ex. 1.75'
                    keyboardType='numeric'
                    value={height}
                    onChangeText={setHeight}
                    style={styles.formInput}
                />

                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                    placeholder='Ex. 75.58'
                    keyboardType='numeric'
                    value={weight}
                    onChangeText={setWeight}
                    style={styles.formInput}
                />

                <TouchableOpacity
                    onPress={handleButtonClick} 
                    style={styles.buttom}>
                        <Text style={styles.textButtom}>
                            {textButton}waeasd
                        </Text>
                    </TouchableOpacity>
            </View>

            <ResultImc resultImc={imc} messageResultImc={messageImc} />
        </View>
    )
}
