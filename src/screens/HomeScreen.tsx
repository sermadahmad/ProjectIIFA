import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ProductCard from '../components/ProductCard';
import MyToast from '../components/MyToast';
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';
import type { Product } from '../products'; // Adjust the import based on your project structure

type HomeScreenProps = {
    navigation: any;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    const products = useSelector((state: RootState) => state.products.value) as Product[];
    const {totalQuantity} = useSelector((state: RootState) => state.cart);
    const [toastVisible, setToastVisible] = useState(false);
    const [toastText, setToastText] = useState('');

    const showToast = (msg: string) => {
        setToastText(msg);
        setToastVisible(true);
    };

    return (
        <View style={{ flex: 1 }}>
            <View>
                <TouchableOpacity style={{
                    backgroundColor: "#6d5b89ff",
                    padding: 6,
                    borderRadius: 5,
                    marginHorizontal: 20,
                    marginVertical: 10,
                }} onPress={() => navigation.navigate('CartScreen')}
                >
                    <Text style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                        margin: 10,
                        textAlign: 'center',
                        color: 'white',
                    }}>View Cart</Text>
                </TouchableOpacity>
                <Text style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    margin: 10,
                    textAlign: 'center',
                }}>Items in Cart: {totalQuantity}</Text>
            </View>
            <FlatList
                data={products}
                renderItem={({ item }) => <ProductCard card={item} navigation={navigation} showToast={showToast} />}
                keyExtractor={(_, i) => i.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ padding: 10 }}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
            />
            <MyToast
                text={toastText}
                visible={toastVisible}
                onHide={() => setToastVisible(false)}
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})