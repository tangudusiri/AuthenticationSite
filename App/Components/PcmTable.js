import React from "react";
import {FlatList, Text, View} from 'react-native';
import styles from "./styles";
const pcmData = [
    {
        title:'CAMPAIGNS',
        marginTop: 10,
        campaign1: ['PCMA 1','PCMA 2','PCMA 3','PCMA 4'],
        campaign2: ['PCMA 5','PCMA 6','PCMA 7','PCMA 8'],
        campaign3: ['PCMA 8','PCMA 10','PCMA 11','PCMA 12'],
    },
    {
        title:"PCM's",
        marginTop: 10,
        campaign1: ['1 000 000','1 500 000','2 000 000','3 000 000'],
        campaign2: ['4 000 000','6 000 000','8 000 000','12 000 000'],
        campaign3: ['16 000 000','20 000 000','25 000 000','30 000 000'],
    },
    {
        title:'PRICE\nINCL VAT',
        campaign1: ['R5 750', 'R8 625', 'R11 500', 'R17 250'],
        campaign2: ['R23 000', 'R34 500', 'R46 000', 'R69 000'],
        campaign3: ['R92 000', 'R115 000', 'R143 000', 'R172 000'],
    },
]

const Divider = () => {
  return (
    <View style={styles.divider}></View>
  )
}

const PcmTable = () => {
    return (
        <FlatList
         style={{flex: 1 ,alignSelf: 'center', backgroundColor:'#FFFFFF'}}
         data={pcmData}
         keyExtractor={(item, i) => i}
         renderItem={({item, i})=>{
            return(
                <View  key={i}>
                  <View style={[styles.tableTitle,
                 {borderTopLeftRadius: item.title === 'CAMPAIGNS' ? 14 : 0,
                 borderTopRightRadius: item.title === 'PRICE\nINCL VAT' ? 14 : 0}
                  ]}>
                   <Text 
                   style={[styles.titleText,
                   {marginTop:item.marginTop}
                  ]}
                   >{item.title}</Text>
                  </View>
                    <View style={styles.pcmTable}>
                    {item.campaign1.map(x=>{
                        return(
                            <Text style={styles.dataText}>{x}</Text>
                            )
                          })}
                    </View>
                    <Divider/>
                    <View style={styles.pcmTable}>
                    {item.campaign2.map(x=>{
                        return(
                            <Text style={styles.dataText}>{x}</Text>
                        )
                    })}
                    </View>
                    <Divider/>
                    <View style={styles.pcmTable}>
                    {item.campaign3.map(x=>{
                        return(
                            <Text style={styles.dataText}>{x}</Text>
                        )
                    })}
                  </View>
                </View>
            )
         }}
         numColumns={3}
        />
    )
}
export default PcmTable