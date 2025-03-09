import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        backgroundColor: '#01A6B3',
        padding: 10,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8
    },
    button:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
    },
    buttonText:{
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontStyle: 'italic',
    }
})