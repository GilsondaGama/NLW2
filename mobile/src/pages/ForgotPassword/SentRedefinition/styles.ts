import { StyleSheet } from 'react-native';
import { HeaderBackground } from '@react-navigation/stack';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#9871F5',
        alignItems:'center',
        justifyContent:'center',
    },
    backgroundImage:{
        width:1110,
        height:595.44,
        alignItems:'center',
        justifyContent:'center',
    },
    sendedRedefinition:{
        fontFamily:'Archivo_700Bold',
        fontSize:28,
        lineHeight:37,
        color:'#fff',
        textAlign:'center',
        marginTop:20,
    },
    info:{
        fontFamily:'Poppins_400Regular',
        fontSize:14,
        lineHeight:24,
        color:'#D4C2FF',
        textAlign:'center',
        marginTop:20,
    },
    button:{
        width:295,
        height:56,
        backgroundColor:'#04D361',
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
    },
    textButton:{
        fontFamily:'Archivo_700Bold',
        fontSize:16,
        lineHeight:26,
        color:'#fff',
    },
})

export default styles;