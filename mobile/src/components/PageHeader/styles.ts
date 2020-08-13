import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        padding:40,
        backgroundColor: '#8757E5',
    },
    topBar:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop:25,
    },

    header:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-between',
    },

    title:{
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 24,
        lineHeight: 32,
        maxWidth: 160,
        marginVertical: 35,
    }
})

export default styles;