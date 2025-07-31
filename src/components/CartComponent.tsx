import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import FontAwesome from '@react-native-vector-icons/fontawesome';
import { useDispatch, UseDispatch } from 'react-redux';
import { removeItemFromCart, decrementItemQuantity, incrementItemQuantity } from '../redux/cartSlice';
type CartComponentProps = {
    product: {
        id: number;
        imgsrc: string;
        freeDelivery: boolean;
        coins: boolean;
        title: string;
        price: number;
        discount: number;
        coinsSave: number;
        rating: number;
        reviewCount: number;
        sold: number;
        quantity: number;
    };
};


const CartComponent: React.FC<CartComponentProps> = ({ product }) => {
    const dispatch = useDispatch();
    // destructure product properties
    const {
        imgsrc,
        title,
        price,
        quantity,
    } = product;
    const handleIncrement = () => {
        dispatch(incrementItemQuantity(product.id));
    };
    const handleDecrement = () => {
        dispatch(decrementItemQuantity(product.id));
    };
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: imgsrc }}
                style={styles.image}
            />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{title}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.price}>${price}</Text>
                    <TouchableOpacity onPress={() => {
                        // Dispatch action to remove item from cart
                        dispatch(removeItemFromCart(product.id));
                    }}>
                        <FontAwesome name="trash" size={20} color="#ff4d4f" />
                    </TouchableOpacity>
                </View>
                <View style={styles.counterContainer}>
                    <TouchableOpacity style={styles.counterButton} onPress={handleDecrement}>
                        <Text style={styles.counterButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{quantity}</Text>
                    <TouchableOpacity style={styles.counterButton} onPress={handleIncrement}>
                        <Text style={styles.counterButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default CartComponent;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#faf8fa',
        borderRadius: 16,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 4,
        elevation: 2,
        margin: 8,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 12,
        marginRight: 16,
        backgroundColor: '#eee',
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#222',
        marginBottom: 2,
    },
    price: {
        fontSize: 15,
        color: '#aaa',
        marginBottom: 10,
    },
    counterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff7f0',
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 4,
        alignSelf: 'flex-start',
    },
    counterButton: {
        backgroundColor: '#ffe3c2',
        borderRadius: 8,
        paddingHorizontal: 10,
        paddingVertical: 2,
        marginHorizontal: 2,
    },
    counterButtonText: {
        fontSize: 20,
        color: '#ff9900',
        fontWeight: 'bold',
    },
    quantityText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#222',
        marginHorizontal: 8,
    },
});