import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { colors, sizes } from './../screens/constants';
import fire from "../images/3.png"
export default function Product(props) {
    return (
        <TouchableOpacity
        // onPress={() => navigation.navigate("Details")}
        // onPress={() => navigation.navigate('Details')}
        onPress={props.onPress}
        style={{
            width: 160,
            height: 280,
            backgroundColor: colors.third,
            borderRadius: sizes.radius,
            marginTop: props.marginTop,
            marginRight: 10
        }}>
            <View style={{
                flexDirection: "row",
                paddingHorizontal: sizes.padding,
                marginTop: sizes.padding,
                justifyContent: "space-between",
                alignItems: "center"
            }}>
                <Image source={fire} style={{ height: 25, width: 25 }} />
                <Text style={{ color:colors.primary, fontSize:sizes.h2}}>280 calories</Text>
            </View>

            <Image source={props.image}
                style={{
                    width: 150,
                    height: 150,
                    marginLeft: 10
                }}
                resizeMode="contain" />
                <View style={{
                    flexDirection: "row",
                    paddingHorizontal: sizes.padding,
                    marginTop: sizes.padding,
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                <Text style={{fontSize:15, color:colors.scondary}}>
                {props.title}
               
                </Text>
                <Text style={{paddingHorizontal:5, backgroundColor:colors.primary, color:"white",borderRadius:sizes.radius}}>
               
                {props.price}
            </Text>
                </View>
               
        </TouchableOpacity>
    )
}
