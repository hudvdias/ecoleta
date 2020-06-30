import React, { useState, useEffect } from "react"
import { Feather as Icon } from "@expo/vector-icons"
import { View, ImageBackground, Text, Image, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from "react-native"
import { RectButton } from "react-native-gesture-handler"
import { useNavigation, useRoute } from "@react-navigation/native"
import RNPickerSelect, { Item } from 'react-native-picker-select'
import Axios from "axios"

interface IBGEUFResponse { sigla: string }
interface IBGECityResponse { nome: string }

const Home = () => {
    const navigation = useNavigation()
    const [ufs, setUfs] = useState<Item[]>([])
    const [cities, setCities] = useState<Item[]>([])
    const [selectedUf, setSelectedUf] = useState("0")
    const [selectedCity, setSelectedCity] = useState("0")

    function handleNavigateToPoints() {
        if (selectedUf === "0") return null
        if (selectedCity === "0") return null
        navigation.navigate("Points", {uf: selectedUf, city: selectedCity})
    }

    useEffect(() => {
        Axios.get<IBGEUFResponse[]>("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then(response => {
            const ufInitials = response.data.map(uf => uf.sigla)
            const items = ufInitials.map(uf => ({ label: uf, value: uf, key: uf }))
            setUfs(items)
        })
    }, [])

    useEffect(() => {
        if (selectedUf !== "0") {
            Axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`).then(response => {
                const cityNames = response.data.map(cidade => cidade.nome)
                const items = cityNames.map(city => ({ label: city, value: city, key: city }))
                setCities(items)
            })
        }
    }, [selectedUf])

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
            <ImageBackground source={require("../../assets/home-background.png")} style={styles.container}>
                <View style={styles.main}>
                    <Image source={require("../../assets/logo.png")} />
                    <View> 
                        <Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
                        <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</Text>
                    </View>
                </View>
                <View style={styles.footer}>
                <RNPickerSelect style={{viewContainer: styles.input}} onValueChange={(value) => setSelectedUf(value)} items={ufs} placeholder={{label: "Selecione o Estado", value: "0"}} />
                <RNPickerSelect style={{viewContainer: styles.input}} onValueChange={(value) => setSelectedCity(value)} items={cities} disabled={selectedUf === "0" ? true : false} placeholder={{label: "Selecione a Cidade", value: "0"}} />
                    <RectButton style={styles.button} onPress={handleNavigateToPoints}>
                        <View style={styles.buttonIcon}>
                            <Text>
                                <Icon name="arrow-right" color="#fff" size={24} />
                            </Text>
                        </View>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </RectButton>
                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
    },
    main: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        color: '#322153',
        fontSize: 32,
        fontFamily: 'Ubuntu_700Bold',
        maxWidth: 260,
        marginTop: 64,
    },
    description: {
        color: '#6C6C80',
        fontSize: 16,
        marginTop: 16,
        fontFamily: 'Roboto_400Regular',
        maxWidth: 260,
        lineHeight: 24,
    },
    footer: {},
    select: {},
    input: {
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 8,
        paddingLeft: 20,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#34CB79',
        height: 60,
        flexDirection: 'row',
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        marginTop: 8,
    },
    buttonIcon: {
        height: 60,
        width: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        color: '#FFF',
        fontFamily: 'Roboto_500Medium',
        fontSize: 16,
    }
});

export default Home