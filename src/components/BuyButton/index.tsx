import { View, TouchableOpacity, Text, Alert } from "react-native"
import { styles } from './style'
import { AntDesign } from '@expo/vector-icons'

export default function BuyButton() {
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => { Alert.alert('PARABÉNS', 'Você adquiriu esse carro!');
            }}>
                <AntDesign name="shoppingcart" size={24} color='white' style={styles.icon} />
                <Text style={styles.buttonText}> Buy This </Text>
            </TouchableOpacity>
        </View>
    )
}