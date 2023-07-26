
import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get('window')
export default StyleSheet.create({
  title: {
    color: '#FFFFFF',
    fontFamily: 'Gordita-Bold',
    fontSize: 22,
    marginHorizontal: 30,
    marginVertical: 50,
    lineHeight: 40
  },
  label: {
    textAlign: 'left',
    fontFamily: 'Gordita-Medium',
    fontSize: 12,
    lineHeight: 20,
    marginLeft: 15,
    color: '#32545a'
  },
  textContainer: {
    // flex: 1,
    flexDirection: 'row',
    margin: 12,
    // borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 5,
  },
  input: {
    padding: 10
  },
  button: {
    flex: 1,
    height: 50,
    margin: 10,
    backgroundColor: "#25BE8F",
    justifyContent: 'center',
    alignItems: "center",
    borderRadius: 10,
    elevation: 5
  },
  errorMsg: {
    marginHorizontal: 10,
    fontSize: 15,
    fontFamily: 'Gordita-Medium',
    color: "red"
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
    backgroundColor: '#25BE8F'
  },
  himeTitle: {
    fontFamily: 'Gordita-Medium',
    fontSize: 20,
    color: '#fff',
    marginLeft: 20,
    marginTop: 40,
  },
  card: {
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 10,
    padding: 10,
    elevation: 5
  },
  profileWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  peofileImg: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius: (width * 0.3) / 2,
    // borderWidth: 1,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: '#d6d5d4',
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileName: {
    fontFamily: 'Gordita-Bold',
    fontSize: 20,
    color: '#170c01'
  },
  designation: {
    fontFamily: 'Gordiat-Regular',
    fontSize: 15,
    color: '#170c01'
  },
  iconWrapper: {
    width: width * 0.1,
    height: width * 0.1,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'blue',
    margin: 10
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#d6d5d4'
  },
  profileInput: {
    flex: 1,
    marginTop: 10,
    borderColor: 'blue',
    borderWidth: 1,
    height: 40
  },
  icon: {
    width: width * 0.09,
    height: width * 0.09,
    borderRadius: (width * 0.09) / 2,
    // borderWidth: 1,
    margin: 10
  },
  teamWrapper: {
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: 100,
    // borderWidth: 1,
    margin: 10
  },
  screenName: {
    fontFamily: 'Gordita-Bold',
    fontSize: 15,
    color: '#170c01',
    marginTop: 13,
  },
  pcmContent: {
    flex: 1,
    backgroundColor:'#01272F',
    borderRadius: 20
  },
  pcmTitle : {
    color:'#ffffff',
    textAlign:'center',
    fontSize: 34,
    // marginVertical: 20,
    lineHeight: 34,
    letterSpacing: -2,
    marginTop: 40,
    fontWeight: 700
  }, 
  pcmDecs : {
    color: '#ffffff',
    textAlign: 'center', 
    padding: 20,
    lineHeight: 24,
    fontSize: 16,
    fontWeight:400
  },
  from: {
    color:'white',
    fontSize: 13,
    lineHeight: 20, 
    fontWeight: 400
  }, 
  value : {
    fontSize: 46, 
    lineHeight: 50, 
    letterSpacing: -2,
    color: '#ffffff',
    fontWeight: 700
  },
  vat: {
    fontSize: 10,
    lineHeight: 14,
    color:'#ffffff',
    fontWeight: 500
  }, 
  btn: {
    flex: 1,
    borderRadius: 13,
    padding: 18,
    backgroundColor:'#ffffff',
    elevation: 5, 
    margin: 15
  }, 
  btnText : {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 16,
    color:'#01272F', 
    fontWeight: 700
  },
  staticData: {
   padding: 10
  },
  staticDataText: {
    fontWeight: 700,
    fontSize: 24,
    lineHeight: 32, 
    letterSpacing: -0.5,
    color:'#01272F', 
    marginLeft: 15
  },
   staticDataDesc: {
    fontWeight: 700,
    fontSize: 14,
    lineHeight: 22,
    color:'#01272F', 
    padding: 10, 
    marginTop: 15
   }, 
   features: {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: 22,
    color:'#01272F', 
    marginLeft: 10, 
   },
    tandC: {
      fontSize: 12,
      fontWeight: 500,
      lineHeight: 20,
      color:'#01272F', 
      marginLeft: 25
    },
    campaignTitle: {
      fontWeight: 700,
      fontSize: 24,
      lineHeight: 32,
      letterSpacing: -0.5,
      textAlign:'center',
      color:'#01272F', 
      marginTop: 30
    }, 
    campaignDesc: {
      fontWeight: 400,
      fontSize: 14,
      textAlign:'center',
      color:'#01272F',
      padding: 20,
      lineHeight: 22
    },
    keyCard: {
       flexDirection:'row',
       justifyContent:'space-around',
       alignItems:'center',
       flex: 1, 
       margin: 15, 
       elevation: 1, 
       backgroundColor:'#ffffff',
       padding: 10, 
       borderRadius: 20
    },
    keyContent: {
      fontWeight: 500,
      fontSize: 16,
      lineHeight: 21, 
      letterSpacing:-0.3,
      color:'#01272F',
    },
    campaignHeading:{
      fontWeight: 700,
      fontSize: 24,
      lineHeight: 32,
      letterSpacing: -0.5,
      textAlign:'center',
      color:'#01272F',
      marginVertical: 25
    },
    carouselTitle: {
      fontWeight: 700,
      fontSize: 24,
      lineHeight: 32,
      color:'#ffffff',
      marginTop: 30
    },
    carouselContent: {
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 22,
      color:'#ffffff',
      textAlign:'justify',
      padding: 30
    },
    caroselBtn: {
      backgroundColor:'#01272F', 
      padding: 20,
      margin: 10,
      borderRadius: 20
    },
    pcmTable: {
      backgroundColor:'#ffffff',
      elevation: 2, 
      padding: 25,
      marginRight: 4,
    }, 
    divider: {
      borderWidth: 1,
      borderColor: '#809397',
      marginRight: 4
    },
    dataText: {
      color: '#01272F',
      fontSize: 12,
      fontWeight: 400, 
      padding: 5,
    },
    tableTitle: {
      backgroundColor:'#00C1BC', 
      marginRight: 4, 
      marginBottom: 5,
      height: 60
    },
    titleText: {
      padding: 15, 
      textAlign: 'center',
      color: '#ffffff', 
      fontWeight: 700,
      fontSize: 12,
    }
})