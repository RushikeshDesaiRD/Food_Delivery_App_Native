import React from 'react'
import { View, Text, Image, TouchableOpacity, Picker, ScrollView } from 'react-native'
import { colors, sizes } from "./constants"
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo"
import { FlatList } from 'react-native-gesture-handler';
import burger from "../images/4.png"
import burger2 from "../images/10.png"
import burger3 from "../images/5.png"

import burger4 from "../images/6.png"
import burger5 from "../images/9.png"

import Product from "../components/Product";
export default function Home(props) {
    const [selectedValue, setSelectedValue] = React.useState("Los Angles");
    return (
        <ScrollView>
            <View style={{ flexDirection: "row", backgroundColor: colors.scondary,alignItems: "center", paddingHorizontal: sizes.padding,
             paddingVertical:40, borderBottomLeftRadius:40,borderBottomRightRadius:40  }}>
                <View style={{ width: "10%" }}>
                    <Feather name="align-left"
                        style={{ fontWeight: "bold" }}
                        color={colors.primary} size={30} />
                </View>
                <View style={{ width:"80%", alignItems:"center" }}>
                   
                  
                </View>
                <View style={{width:"10%"}}>
                   <Entypo name="magnifying-glass" color={colors.primary} size={30}/>
                </View>
            </View>

            <View style={{marginTop:50, paddingHorizontal:sizes.padding}}>
               <Text style={{color:colors.scondary, fontSize:sizes.h1}}>Food That</Text>
               <Text style={{color:colors.scondary, fontSize:sizes.h1}}>Meet Your Needs</Text>

            </View>
            <View style={{marginTop:20, paddingHorizontal:sizes.padding}}>
               <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={{
                        flexDirection:"row", 
                     justifyContent:"space-between",
                     alignItems:"center",
                     marginHorizontal:sizes.radius,
                      backgroundColor:colors.scondary, 
                      borderRadius:sizes.padding,
                      padding:sizes.radius,

                    }}>
                       <Image source={burger2} resizeMode="cover" style={{ height:30, width:50}}/>
                       <Text style={{color:colors.third, fontSize:20}}>Burrito</Text>
                    </View>
                    <View style={{
                        flexDirection:"row", 
                     justifyContent:"space-between",
                     alignItems:"center",
                     marginHorizontal:sizes.radius,
                      backgroundColor:colors.scondary, 
                      borderRadius:sizes.padding,
                      padding:sizes.radius,

                    }}>
                       <Image source={burger3} resizeMode="cover" style={{ height:30, width:50}}/>
                       <Text style={{color:colors.third, fontSize:20}}>Burger</Text>
                    </View>
                    <View style={{
                        flexDirection:"row", 
                     justifyContent:"space-between",
                     alignItems:"center",
                     marginHorizontal:sizes.radius,
                      backgroundColor:colors.scondary, 
                      borderRadius:sizes.padding,
                      padding:sizes.radius,

                    }}>
                       <Image source={burger} resizeMode="cover" style={{ height:30, width:50}}/>
                       <Text style={{color:colors.third, fontSize:20}}>Burger</Text>
                    </View>
                    
                    
               </ScrollView>
            </View>

            <View style={{
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"space-between",
                paddingHorizontal:sizes.padding,
                marginTop:30
            }}>
            <Text style={{fontSize:20, color:colors.primary}}>New Product</Text>
            <Entypo name="dots-three-horizontal" color={colors.primary} size={25}/>
            </View>

            <View style={{flexDirection:"row", paddingHorizontal:sizes.padding, marginTop:40}}>
               <Product 
                image={burger4}
                title="Adios Pizaa"
                price="40"
                onPress={() => props.navigation.navigate('Details',{
                  image:burger4,
                  title:"Adios Pizaa",
                  price:"40"
                })}
               />
               <Product 
               image={burger5}
               title="Adios Pizaa"
               price="400"
              
                   marginTop={30}
              
              />
           
            </View>
            <View style={{flexDirection:"row", paddingHorizontal:sizes.padding, marginTop:0}}>
            <Product 
             image={burger4}
             title="Adios Pizaa"
             price="400"
            />
            <Product 
            image={burger5}
            title="Adios Pizaa"
            price="400"
           
                marginTop={30}
           
           />
         
         </View>
        </ScrollView>
    )
}
