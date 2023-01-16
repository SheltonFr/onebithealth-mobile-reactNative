import React, { useEffect, useState } from 'react'
import {
    TextInput,
    View,
    Text,
    TouchableOpacity,
    Keyboard,
    Vibration,
    Pressable
} from 'react-native'

import ResultImc from './ResultImc/index'
import styles from './style'

export default function Form() {


    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [textButton, setTextButton] = useState('Calcular')
    const [imc, setImc] = useState(null);
    const [messageImc, setMessageImc] = useState("Preencha o peso e a altura");
    const [errorMessage, setErrorMessage] = useState(null);

    function inputValidations() {
        if (imc == null) {
            Vibration.vibrate();
            setErrorMessage('Campo obrigatório*')
        }
    }


    function imcCalculator() {
        let formattedHeight = height.replace(',', '.')
        let formattedWeight = weight.replace(',', '.')
        return setImc((formattedWeight / (formattedHeight * formattedHeight)).toFixed(2));
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
            setMessageImc("Preencha o peso e a altura");
            setTextButton('Calcular');

        }
    }

    return (
        <View style={styles.formContext}>
            {!imc ?
                <Pressable onPress={Keyboard.dismiss} style={styles.form}>
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

                </Pressable>

                :
                <View style={styles.form}>
                    <ResultImc resultImc={imc} messageResultImc={messageImc} />
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
            }



        </View>
    )
}
