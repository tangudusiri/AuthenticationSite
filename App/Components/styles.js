
import { StyleSheet } from "react-native";
 
export default StyleSheet.create({
    title: {
        color:'#FFFFFF',
        fontFamily:'Gordita-Bold',
        fontSize:22,
        marginHorizontal: 30,
        marginVertical: 50,
        lineHeight: 40
    },
    label: {
        textAlign: 'left',
        fontFamily:'Gordita-Medium',
        fontSize: 12,
        lineHeight: 20,
        marginLeft: 15,
        color:'#32545a'
    },
    textContainer: {
        // flex: 1,
        flexDirection: 'row',
        margin: 12,
        // borderWidth: 1,
        borderRadius: 10,
        backgroundColor:'#fff',
        elevation:5,
    },
    input: {
        padding: 10
    },
    button: {
        flex: 1,
        height: 50, 
        margin: 10,
        backgroundColor:"#25BE8F",
        justifyContent: 'center',
        alignItems:"center",
        borderRadius: 10,
        elevation: 5
    },
    errorMsg: {
        marginHorizontal: 10,
        fontSize: 15,
        fontFamily: 'Gordita-Medium',
        color:"red"
    },
    toastMsg: {
        bending: 1,  
        justifyContent: 'center',  
        paddingTop: 10,  
        backgroundcolor: 'red',  
        padding: 8,  
    },
    homePage: {
        flex: 1,
        backgroundColor:'#25BE8F'
    },
    himeTitle: {
        fontFamily:'Gordita-Medium',
        fontSize: 20,
        color: '#fff',
        marginLeft: 20,
        marginTop: 40,
    },
    card: {
        backgroundColor:'#fff',
        margin: 15,
        borderRadius: 10,
        padding: 10,
        elevation: 5
    }
})