
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import CartComponent from '../components/CartComponent';
import products from '../products';
import { useSelector } from 'react-redux';
import type { RootState } from '../redux/store';

const CartScreen = () => {
    const {items, totalPrice, totalQuantity } = useSelector((state: RootState) => state.cart);

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.headerBox}>
                <Text style={styles.headerText}>Items in Cart: {totalQuantity}</Text>
            </View>
            <FlatList
                data={items} // Adjust the slice as needed
                renderItem={({ item }) => (
                    <CartComponent
                        product={item}
                    />
                )}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ padding: 10, paddingBottom: 80 }}
                numColumns={1}
            />
            <View style={styles.footerBox}>
                <Text style={styles.footerText}>Total: ${totalPrice}</Text>
            </View>
        </View>
    );
};

export default CartScreen;

const styles = StyleSheet.create({
    headerBox: {
        backgroundColor: "#6d5b89ff",
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 20,
        marginVertical: 10,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 10,
        textAlign: 'center',
        color: 'white',
    },
    footerBox: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        backgroundColor: "#6d5b89ff",
        paddingBottom: 20,
    },
    footerText: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 10,
        textAlign: 'center',
        color: 'white',
    },
});