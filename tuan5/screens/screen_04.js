import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, FlatList } from "react-native";
import React, { useState } from "react";

const product = [
   {
    id: '1',
    name: 'Product1',
    price: '$10',
    rating: require("../assets/DATA/Rating3.png"),
    image: require("../assets/DATA/Image74.png"),
   },
   {
    id: '2',
    name: 'Product2',
    price: '$20',
    rating: require("../assets/DATA/Rating3.png"),
    image: require("../assets/DATA/Image7.png"),
   },
   {
    id: '3',
    name: 'Product3',
    price: '$30',
    rating: require("../assets/DATA/Rating3.png"),
    image: require("../assets/DATA/Image72.png"),
   },
   {
    id: '4',
    name: 'Product4',
    price: '$40',
    rating: require("../assets/DATA/Rating3.png"),
    image: require("../assets/DATA/Image71.png"),
   },
];
const size =['XS', 'S', 'M', 'L', 'XL'];

export default function App({ navigation }) {

    const [selectedProduct, setSelectedProduct] = useState(product[0]);
    const [selectedSize,setSelectedSize] = useState(size[0]);
    const [quantity,setQuantity] = useState(1);

    

    return (
        <View style={styles.container}>
            <View style={{
                flexDirection: "row",
                alignItems: 'center',
                marginBottom: 20,
                marginRight:70,
            }}>
               <TouchableOpacity onPress={() => navigation.navigate('Screen_03',{})}>
               <Image source={require("../assets/DATA/thoat.png")}
                    style={{
                        width: 50,
                        height: 50,
                        marginRight: 20,
                    }} />
               </TouchableOpacity>
                <Text style={{
                    fontSize: 30,
                    fontWeight: "bold",
                    marginTop: 4,
                }}>Product Name</Text>
            </View>

            <View style={{
                width: "100%",
                height: 200,
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Image source={selectedProduct.image}
                    style={{
                        width: "90%",
                        height: "100%",
                        resizeMode: "contain",
                        borderRadius: 10,
                        backgroundColor: "pink",
                    }} />
            </View>
            <FlatList
                data={product}
                horizontal
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => setSelectedProduct(item)}>
                        <View style={[selectedProduct.id === item.id]}>
                            <Image source={item.image} style={{
                                width: 80,
                                height: 80,
                                backgroundColor:"#ccc",
                                resizeMode: "contain",
                                borderRadius:10,
                                marginHorizontal:5,
                                marginTop:5,
                            }} />
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
            />
            <View style={{
                flexDirection:"row",
            }}>
              <Text style={{
                fontSize:20,
                fontWeight:"bold",
              }}>{selectedProduct.price}</Text>
              <Text style={{
                fontSize:10,
                color:"red",
                marginLeft:10,
                marginTop:9,
                marginRight:250,
              }}>Buy 1 get 1</Text>
            </View>

            <View style={{
                flexDirection:"row",
            }}>
              <Text style={{
                fontSize:20,
                fontWeight:"bold",
                marginRight:150,
                marginTop:10,
              }}>Product name</Text>
              <Image source={selectedProduct.rating} style={{width:20,height:20,marginRight:10,marginTop:20}}></Image>
              <Text style={{fontSize:20,fontWeight:"bold",marginTop:20,}}>4.5</Text>
            </View>
            <View>
                <Text style={{fontSize:10, color:"#ccc", marginRight:190,}}>Occaecat est deserunt tempor offici</Text>
            </View>

            <View style={{}}>
                 <Text style={{fontSize:20,fontWeight:"bold",marginTop:10}}>Size</Text>
                 <View style={{ flexDirection: 'row',marginRight:150, marginTop: 5 }}>
        {size.map((s) => (
            <TouchableOpacity
                key={s}
                style={{
                    margin: 5,
                    padding: 10,
                    borderWidth: 1,
                    borderColor: selectedSize === s ? 'blue' : 'gray',
                    backgroundColor: selectedSize === s ? '#e0f7fa' : 'white',
                    borderRadius: 5,
                }}
                onPress={() => setSelectedSize(s)}
            >
                <Text style={{ fontSize: 10 }}>{s}</Text>
            </TouchableOpacity>
        ))}
    </View>
            </View>
           
            <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10, marginRight:260}}>Quantity</Text>
<View style={{ marginBottom: 20,}}>

  <View style={{ flexDirection: "row", }}>
    <TouchableOpacity 
      onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)} 
      style={{
        width: 30,
        height: 30,
        backgroundColor: "#ccc",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        marginHorizontal: 10
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>-</Text>
    </TouchableOpacity>

    <Text style={{ fontSize: 18, fontWeight: "bold", marginHorizontal: 10 }}>{quantity}</Text>

    <TouchableOpacity 
      onPress={() => setQuantity(quantity + 1)} 
      style={{
        width: 30,
        height: 30,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5,
        marginHorizontal: 10,
        marginRight:160,
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>+</Text>
    </TouchableOpacity>
    <Text style={{fontSize:20, fontWeight:"bold", marginTop:5}}>Total ${quantity * parseFloat(selectedProduct.price.replace('$', ''))}</Text>
  </View>
</View>

<View style={{
    width:"100%",
    height:40,
    alignItems:"center",
    justifyContent:"center",
    marginBottom:10,
}}>
    <TouchableOpacity style={{width:"90%",height:"100%",justifyContent:"center",alignItems:"center",borderRadius:10,backgroundColor:"red",}}
    onPress={() => navigation.navigate("Screen_03")}>
        <Text style={{
            fontSize:20,
            color: "white",
            fontWeight:"bold",
        }}>Add to cart</Text>
    </TouchableOpacity>
</View>

            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
});
