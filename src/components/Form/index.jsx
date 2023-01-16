import React, { useEffect, useState } from 'react'
import {
    TextInput,
    View,
    Text,
    TouchableOpacity,
    Keyboard,
    Vibration
} from 'react-native'

import ResultImc from './ResultImc/index'
import styles from './style'

export default function Form() {


    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [textButton, setTextButton] = useState('Calcular')
    const [imc, setImc] = useState(null);
    const [messageImc, setMessageImc] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    function inputValidations() {
        if (imc == null) {
            Vibration.vibrate();
            setErrorMessage('Campo obrigatório*')
        }
    }


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
            setErrorMessage(null);
            Keyboard.dismiss();

        } else {
            inputValidations();
            setImc(null);
            setMessageImc(null)
            setTextButton('Calcular');

        }
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel} >Altura</Text>
                {(!height && errorMessage) && <Text style={styles.errorMessage}>{errorMessage}</Text>}
                <TextInput
                    placeholder='Ex. 1.75'
                    keyboardType='numeric'
                    value={height}
                    onChangeText={setHeight}
                    style={styles.formInput}
                />

                <Text style={styles.formLabel}>Peso</Text>
                {(!weight && errorMessage) && <Text style={styles.errorMessage}>{errorMessage}</Text>}
                <TextInput
                    placeholder='Ex. 75.58'
                    keyboardType='numeric'
                    value={weight}
                    onChangeText={setWeight}
                    style={styles.formInput}
                />

                <TouchableOpacity
                    onPress={handleButtonClick}
                    style={styles.buttom}
                >
                    <Text
                        style={styles.textButtom}
                    >
                        {textButton}
                    </Text>
                </TouchableOpacity>

            </View>

            <ResultImc resultImc={imc} messageResultImc={messageImc} />
        </View>
    )
}
