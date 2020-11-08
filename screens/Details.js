import React from 'react'
import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native'
import { colors, sizes } from './constants';
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";


import burger4 from "../images/6.png"
import burger5 from "../images/9.png"

import Product from "../components/Product";
import back from "../images/4.png"
export default function Details({ route, navigation}) {
    const { image,title, price }= route.params
    console.log(image,title, price)
    // image={burger4},
    // title="Adios Pizaa",
    // price="40"
    return (
        <>
        <StatusBar hidden/>
        <View style={{
            flex:1,
            backgroundColor:colors.primary
        }}>
           <View
           style={{
               flexDirection:"row",
                justifyContent:"space-between",
                 alignItems:"center",
                 paddingHorizontal:sizes.padding,
                 marginTop:26

           }}
           >

           <Feather name="arrow-left"
           onPress={() => navigation.navigate('Home')}
           style={{ 
               fontWeight: "bold",
               padding:sizes.radius,
               backgroundColor:"white",
               borderRadius:sizes.radius
         }}
           color={colors.scondary} size={30} />

            <Text style={{fontSize:sizes.h1, color:colors.scondary}}>Fast Food</Text>

           <AntDesign name="heart"
           style={{ 
               fontWeight: "bold",
               padding:sizes.radius,
               backgroundColor:"white",
               borderRadius:sizes.radius
         }}
           color={colors.scondary} size={30} />


         


           </View>




           <View 
           style={{
               width:"80%",
               marginLeft:"10%",
               backgroundColor:"white",
               height:500,
               borderRadius:sizes.padding,
               marginTop:50,
               padding:sizes.padding
           }}
           >
              <Text style={{
                  alignSelf:"center", 
                  color:colors.scondary,
                  fontSize:sizes.h1,
                  fontWeight:"bold"
                }}>
                {title}
                </Text>

                <Text style={{
                    alignSelf:"center", 
                    color:"gray",
                    fontSize:20,
                    fontWeight:"bold"
                  }}>
                  ${price}
                  </Text>
                  <Image source={image}
                  style={{
                    width:"100%",
                    height:180,
                    marginVertical:30

                  }}/>
                  <Text style={{textAlign:"center", color:"gray", fontWeight:"bold"}}>
                  Pizza is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped
                  </Text>
                  <TouchableOpacity style={{
                      flexDirection:"row",
                      justifyContent:"space-between",
                      alignItems:"center",
                      paddingHorizontal:sizes.padding,
                      paddingVertical:8,
                      width:"70%",
                      alignSelf:"center",
                      backgroundColor:colors.scondary,
                      marginVertical:sizes.padding,
                      borderRadius:sizes.padding
                  }}>
                   <Text style={{
                       color:"white",
                       fontSize:sizes.h2,
                       fontWeight:"bold"
                   }}>Add To Cart</Text>
                   <Feather name="shopping-cart" color={"white"} size={30}/>
                  </TouchableOpacity>
                
           </View>
        </View>
        </>
    )
}
