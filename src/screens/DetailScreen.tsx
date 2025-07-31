import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import MyToast from "../components/MyToast";

type DetailScreenProps = {
    route: {
        params: {
            card: {
                imgsrc: string;
                title: string;
                price: number;
                discount: number;
                coinsSave: number;
                rating: number;
                reviewCount: number;
                sold: number;
                freeDelivery: boolean;
                coins: boolean;
            };
        };
    };
};

const DetailScreen: React.FC<DetailScreenProps> = ({ route }) => {
    const [toastVisible, setToastVisible] = useState(false);
    const [toastText, setToastText] = useState('');

    const showToast = (msg: string) => {
        setToastText(msg);
        setToastVisible(true);
    };
    // Destructure card data from route.params
    const {
        imgsrc,
        title,
        price,
        discount,
        coinsSave,
        rating,
        reviewCount,
        sold,
        freeDelivery,
        coins,
    } = route.params.card; // Destructuring the card object passed from the previous screen

    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={styles.container}>
                {/* Image Section */}
                <Image source={{ uri: imgsrc }} style={styles.image} />

                {/* Product Title */}
                <Text style={styles.title}>{title}</Text>

                {/* Price and Discount */}
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>${price}</Text>
                    {discount > 0 && <Text style={styles.discount}>-{discount}%</Text>}
                </View>

                {/* Coins Saving */}
                {coinsSave > 0 && (
                    <Text style={styles.coins}>Save ${coinsSave} with coins</Text>
                )}

                {/* Rating and Reviews */}
                <View style={styles.ratingContainer}>
                    <Text style={styles.rating}>
                        Rating: {rating} ({reviewCount} reviews)
                    </Text>
                </View>

                {/* Sold Count */}
                <Text style={styles.sold}>Sold: {sold}</Text>

                {/* Delivery and Coins */}
                <View style={styles.deliveryContainer}>
                    {freeDelivery && <Text style={styles.freeDelivery}>Free Delivery</Text>}
                    {coins && (
                        <Text style={styles.coinsText}>Earn coins with this purchase</Text>
                    )}
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => {
                            showToast("Added to cart!");
                            // Here you can also add logic to actually add the item to the cart
                        }}
                        style={{
                            backgroundColor: "#6d5b89ff",
                            // padding: 10,
                            borderRadius: 5,
                            marginHorizontal: 20,
                            marginVertical: 10,
                        }}>
                        <Text style={{
                            backgroundColor: "#6d5b89ff",
                            padding: 12,
                            borderRadius: 5,
                            textAlign: "center",
                            color: "white",
                            fontSize: 18,
                            fontWeight: "bold",
                        }}>Add to Cart</Text>
                    </TouchableOpacity>
                </View>


            </ScrollView>
            <MyToast
                text={toastText}
                visible={toastVisible}
                onHide={() => setToastVisible(false)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f9f9f9ff",
    },
    image: {
        width: "100%",
        height: 300,
        resizeMode: "cover",
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginVertical: 10,
        marginHorizontal: 15,
    },
    priceContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 15,
        marginBottom: 10,
    },
    price: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#000",
    },
    discount: {
        fontSize: 18,
        color: "#ff4d4d",
        marginLeft: 10,
    },
    coins: {
        fontSize: 16,
        color: "#000",
        marginLeft: 15,
    },
    ratingContainer: {
        marginHorizontal: 15,
        marginBottom: 10,
    },
    rating: {
        fontSize: 16,
        color: "#666",
    },
    sold: {
        fontSize: 16,
        color: "#000",
        marginHorizontal: 15,
        marginBottom: 10,
    },
    deliveryContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 15,
        marginTop: 10,
    },
    freeDelivery: {
        fontSize: 16,
        color: "#28a745",
    },
    coinsText: {
        fontSize: 16,
        color: "#007bff",
    },
});

export default DetailScreen;
