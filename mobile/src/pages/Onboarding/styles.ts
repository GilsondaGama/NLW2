import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F0F0F7', 
    },

    firstTopContainer:{
        backgroundColor:'#8257E5',
        position:'absolute',
        width:'100%',
        height:'45%',
        alignItems:'center',
        justifyContent:'center',
        top:0,
        left:0,
        right:0,
    },

    secondTopContainer:{
        backgroundColor:'#04D361',
        position:'absolute',
        width:'100%',
        height:'45%',
        alignItems:'center',
        justifyContent:'center',
        top:0,
        left:0,
        right:0,
    },

    backgroundImage:{
        width:235,
        height:248,
        alignItems:'center',
        justifyContent:'center',
    },

    imageIcon:{
        width:120,
        height:120,
        marginTop:30
    },

    bottomContainer:{
        position:'absolute',
        height:'55%',
        paddingVertical: 60,
        paddingHorizontal:30,
        bottom:0,
        left:0,
        right:0,
    },

    number:{
        fontFamily:'Archivo_400Regular',
        fontSize:40,
        lineHeight:44,
        color:'#6A6180',
        opacity: 0.16,
    },

    phrase:{
        fontFamily:'Poppins_400Regular',
        fontSize:24,
        lineHeight:34,
        color:'#6A6180',
        marginTop:50,
    },

    buttonGoNext:{
        width:75,
        alignItems:'center',
        justifyContent:'center',
        position:'absolute',
        right:30,
        bottom:90,
    }
})

export default styles;