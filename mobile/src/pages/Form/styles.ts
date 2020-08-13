import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    topContainer:{
        backgroundColor:'#8257E5',
        position:'absolute',
        height:'45%',
        alignItems:'center',
        justifyContent:'center',
        top:0,
        right:0,
        left:0,
    },

    backgroundImage:{
        width:240,
        height:267,
        marginTop:40,
        alignItems:'center',
        justifyContent:'center',
    },

    logoImage:{
        width:160,
        height:46.75,
        marginTop:30,
    },

    alignSlogan:{
        width:160,
        marginTop:7,
    },

    slogan:{
        fontFamily:'Poppins_400Regular',
        color:'#D4C2FF',
    },

    bottomContainer:{
        backgroundColor:'#F0F0F7',
        position:'absolute',
        paddingTop:30,
        height:'55%',
        alignItems:'center',
        bottom:0,
        right:0,
        left:0,
    },

    header:{
        width:310,
        marginTop:30,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },

    loginText:{
        fontFamily:'Poppins_600SemiBold',
        fontSize:24,
        lineHeight:34,
        color:'#32265d',
    },

    textButtonCreateAccount:{
        fontFamily:'Poppins_400Regular',
        fontSize:12,
        lineHeight:24,
        color:'#8257e5',
    },
    
    containerInput:{
        width:310,
        marginTop:40,
    },

    inputEmailGroup:{
        backgroundColor:'#FAFAFC',
        flexDirection:'row',
        alignItems:'center',
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
        borderWidth:1,
        borderStyle:'solid',
        borderColor:'#E6E6F0',
    },

    inputEmail:{
        width:'85%',
        height:64,
        paddingHorizontal:15,
        fontFamily:'Poppins_400Regular',
        fontSize:14, 
    },

    inputPasswordGroup:{
        backgroundColor:'#FAFAFC',
        flexDirection:'row',
        alignItems:'center',
        borderBottomLeftRadius:8,
        borderBottomRightRadius:8,
        borderWidth:1,
        borderStyle:'solid',
        borderColor:'#E6E6F0',
    },

    inputPassword:{
        width:'85%',
        height:64,
        paddingHorizontal:15,
        fontFamily:'Poppins_400Regular',
        fontSize:14,
    },
    errorMessage:{
        marginLeft:5,
        marginTop:10,
        fontWeight:'bold',
        color:'#ff1439',
    },
    footer:{
        width:310,
        marginTop:15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },

    checkboxContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:115,
    },

    checkboxText:{
        fontFamily:'Poppins_400Regular',
        fontSize:12,
        lineHeight:24,
        color:'#9C98A6'
    },

    forgotMyPassword:{
        fontFamily:'Poppins_400Regular',
        fontSize:12,
        lineHeight:24,
        color:'#9C98A6',
    },

    login:{
       width:310,
       height:56,
       borderRadius:8,
       marginTop:15,
       backgroundColor:'#DCDCE5',
       alignItems:'center',
       justifyContent:'center', 
    },

    activeLogin:{
        width:310,
        height:56,
        borderRadius:8,
        marginTop:30,
        backgroundColor:'#04D361',
        alignItems:'center',
        justifyContent:'center', 
    },

    loginTextButton:{
        fontFamily:'Archivo_700Bold',
        fontSize:16,
        lineHeight:26,
        color:'#9C98A6',
    },

    loginActiveTextButton:{
        fontFamily:'Archivo_700Bold',
        fontSize:16,
        lineHeight:26,
        color:'#fff',
    }

})

export default styles;