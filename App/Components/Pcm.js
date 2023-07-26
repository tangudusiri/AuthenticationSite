import React from "react";
import { View, Text, Image, ScrollView, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import styles from "./styles";
import Carosel from 'react-native-snap-carousel';
export const SLIDER_WIDTH = Dimensions.get('window').width + 30;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
const data =
{
  "title": "Please Call Me Ads",
  "desc": "Please Call Me (PCM) Advertising is a cost-effective way to reach potential customers and increase your brand visibility. PCMs have no competition, which means your ads get seen by the millions of South Africans who are looking for your products and services.",
  "image": "https://images.yepdev.co.za/backend-files/2023-06/pcm_1.png?VersionId=rFAANK1mIrrlKvT6800x8OeOQMlITY5z",
  "cta_label": "Learn more",
  "cta_action": "Learn More",
  "price": {
    "price_caption": "From",
    "label": "PCM advertising lets you insert your advert into PCM messages that are sent and seen by the sender and the recipient.",
    "value": "R 5 750",
    "duration": "",
    "variation_id": 23755,
    "buy_now": false
  },
  "amount": "5",
  "product_group": "please-call-me-ads",
  "has_vat": "Including VAT",
  "features": [
    "Increase your reach: engage with up to\n30 million potential customers",
    "Increase your brand awareness: potential customers carry their phones wherever\nthey go - meet them where they are",
    "This is a prime opportunity to reach\npotential customers - free from\ncompeting brand ads"
  ]
}
const { width, height } = Dimensions.get('window')
const campaign = {
  title: 'Please Call Me campaigns',
  desc: 'We offer a variety of campaign packages\ndesigned to help you reach a wider audience.\nCheck out our offering and select the package that best suits your marketing needs.',
  kettitle: 'Key benifts',
  keybenifts: [
    {
      icon: require('../Assests/icon1.png'),
      desc: 'Engage with up to 30\nmillion potential customers'
    },
    {
      icon: require('../Assests/icon2.png'),
      desc: 'Increase Brand Awareness\nto your potential customers'
    },
    {
      icon: require('../Assests/icon3.png'),
      desc: 'Engage potential customers\nwithout any competing ads'
    }
  ]
}
const carouselData = [
  {
    heading: 'Boost your online\npresence and sales',
    bg: require('../Assests/solution1.png'),
    content: "Engage your customers 24/7 and make more sales with your own, professional website. With Yep!’s Integrated Solutions, you can create content, publish ads, reach more customers and drive new leads.",
    label: 'Learn more'
  },
  {
    heading: 'Be seen by millions of customers',
    bg: require('../Assests/solution2.png'),
    content: "Professional online presence that is easy to setup and customise, allows you to get quotes from customers and helps drive leads to your business.",
    label: 'Learn more'
  }
]

const CampignCard = () => {
  return (
    <View style={{ marginTop: 30 }}>
      <Text style={styles.campaignTitle}>{campaign?.title}</Text>
      <Text style={styles.campaignDesc}>{campaign?.desc}</Text>
      <Image source={require('../Assests/table.png')} style={{ width: width * 0.93, height: height * 0.58, alignSelf: 'center' }} />
      <Text style={styles.campaignTitle}>{campaign?.kettitle}</Text>

      {campaign?.keybenifts.map((key, i) => {
        return (
          <View style={styles.keyCard} key={i} >
            <Image source={key.icon} style={{ width: width * 0.21, height: width * 0.21, borderRadius: (width * 0.1) / 2, marginTop: -10, marginLeft: -15 }} />
            <Text style={styles.keyContent}>{key.desc}</Text>
          </View>
        )
      })}
      <TouchableOpacity style={[styles.btn, { backgroundColor: '#01272F' }]}>
        <Text style={[styles.btnText, { color: '#ffffff' }]}>Call me back</Text>
      </TouchableOpacity>
    </View>
  )
}

const Pcm = () => {
  console.log('width.......', width, height)
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.pcmContent}>
        <Text style={styles.pcmTitle}>{data?.title || ''}</Text>
        <Text style={styles.pcmDecs}>{data?.desc}</Text>
        <View style={{}}>
          <Image source={require('../Assests/pcmCard.png')} style={{ width: width * 0.88, height: height * 0.51, alignSelf: 'center', }} />
        </View>
        <View style={{ justifyContent: 'flex-start', paddingLeft: 30 }}>
          <Text style={styles.from}>{data?.price?.price_caption}</Text>
          <Text style={styles.value}>{data?.price?.value}</Text>
          <Text style={styles.vat}>{data?.has_vat}</Text>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Call me back</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginVertical: 35 }}>
        <Image source={require('../Assests/pcm.png')} style={{ width: width * 0.9, height: height * 0.39, alignSelf: 'center' }} />
      </View>
      <View style={styles.staticData}>
        <Text style={styles.staticDataText}>{'Please Call Me \n(PCM) Advertising'}</Text>
        <Text style={styles.staticDataDesc}>{'PCM advertising lets you insert your advert\ninto PCM messages that are sent and seen\nby the sender and the recipient.'}</Text>
        {data.features.map((data, i) => {
          return (
            <View style={{ flexDirection: 'row', margin: 10 }} key={i}>
              <Image source={require('../Assests/tick.png')} style={{ width: width * 0.06, height: width * 0.06, marginLeft: 5 }} />
              <Text style={styles.features}>{data}</Text>
            </View>
          )
        })}
      </View>
      <View style={{ justifyContent: 'flex-start', paddingLeft: 30 }}>
        <Text style={[styles.from, { color: '#01272F' }]}>{data?.price?.price_caption}</Text>
        <Text style={[styles.value, { color: '#01272F' }]}>{data?.price?.value}</Text>
        <Text style={[styles.vat, { color: '#01272F' }]}>{data?.has_vat}</Text>
      </View>
      <TouchableOpacity style={[styles.btn, { backgroundColor: '#01272F' }]}>
        <Text style={[styles.btnText, { color: '#ffffff' }]}>Call me back</Text>
      </TouchableOpacity>
      <Text style={styles.tandC}>{'Product'}<Text style={[styles.tandC, { color: '#00C1BC' }]}>{'  Terms & Conditions'}</Text></Text>
      <CampignCard />
      <Carosel
        data={carouselData}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        renderItem={({ item, i }) => {
          return (
            <View key={i}>
              <Text style={styles.campaignHeading}>{'Other Solutions'}</Text>
              <ImageBackground source={item.bg} style={{ width: width * 0.9, height: height * 0.5, alignSelf: 'center', marginLeft: -30, opacity: 0.9 }} imageStyle={{ borderRadius: 20 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={styles.carouselTitle}>{item.heading}</Text>
                  <Text style={styles.carouselContent}>{item?.content}</Text>
                </View>
                <TouchableOpacity style={styles.caroselBtn}>
                  <Text style={[styles.btnText, { color: '#ffffff' }]}>{item?.label}</Text>
                </TouchableOpacity>
              </ImageBackground>
            </View>
          )
        }}
      />
    </ScrollView>
  )
}


export default Pcm