import React, { memo } from "react";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Pressable,
    TouchableOpacity,
} from "react-native";
import FontAwesome from "@react-native-vector-icons/fontawesome";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../redux/cartSlice";
// import MyToast from "./MyToast";

function formatNumberToText(number: number): string {
    if (number >= 1e9) {
        return (number / 1e9).toFixed(1).replace(/\.0$/, "") + "B"; // Billion
    } else if (number >= 1e6) {
        return (number / 1e6).toFixed(1).replace(/\.0$/, "") + "M"; // Million
    } else if (number >= 1e3) {
        return (number / 1e3).toFixed(1).replace(/\.0$/, "") + "k"; // Thousand
    } else {
        return number.toString(); // Less than 1k
    }
}

type ProductCardProps = {
    card: {
        id: number;
        imgsrc: string;
        freeDelivery: boolean;
        coins: boolean;
        title: string;
        price: number;
        discount: number;
        coinsSave?: number;
        rating: number;
        reviewCount: number;
        sold: number;
    };
    navigation: any; // Adjust type as needed
    showToast?: (msg: string) => void;
};

const ProductCard: React.FC<ProductCardProps> = ({ card, navigation, showToast }) => {
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        if (showToast) showToast("Added to cart!");
        // Here you can also dispatch an action to add the product to the cart
        dispatch(addItemToCart(card));
    };

    return (
        <Pressable
            style={({ pressed }) => [styles.card, pressed && styles.pressedCard]}
            onPress={() => navigation.navigate("DetailScreen", { card })}
        >
            <View style={styles.imgBox}>
                <ImageBackground source={{ uri: card.imgsrc }} style={styles.img}>
                    <View style={styles.labelsBox}>
                        <View
                            style={[
                                styles.deliveryBox,
                                !card.coins && styles.noCoinsDeliveryBox,
                            ]}
                        >
                            {card.freeDelivery && (
                                <>
                                    <FontAwesome
                                        name="bus"
                                        size={10}
                                        color="white"
                                        style={{ paddingLeft: 4 }}
                                    />
                                    <Text style={styles.delivery}>FREE DELIVERY</Text>
                                </>
                            )}
                        </View>

                        <View style={styles.coinsBox}>
                            {card.coins && (
                                <>
                                    <FontAwesome
                                        name="bitcoin"
                                        size={10}
                                        color="white"
                                        style={{ paddingLeft: 4 }}
                                    />
                                    <Text style={styles.coins}>COINS</Text>
                                </>
                            )}
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.contentBox}>
                <View>
                    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
                        {card.title}
                    </Text>
                </View>
                <View style={styles.priceDiscountBox}>
                    <View>
                        <Text style={styles.price}>Rs.{card.price}</Text>
                    </View>
                    <View>
                        <Text style={styles.discount}>-{card.discount}%</Text>
                    </View>
                </View>
                {card.coins && (
                    <View>
                        <Text style={styles.coinsSave}>Coins Save Rs.{card.coinsSave}</Text>
                    </View>
                )}
                <View>
                    <View style={styles.ratingBox}>
                        <FontAwesome name="star" size={10} color="orange" />
                        <Text style={styles.rating}>
                            {card.rating} ({card.reviewCount}) |{" "}
                            {formatNumberToText(card.sold)} sold
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 10 }}>
                <TouchableOpacity style={{ margin: 10 }} onPress={handleAddToCart}>
                    <Text style={{
                        backgroundColor: "#6d5b89ff",
                        color: "white",
                        padding: 10,
                        textAlign: "center",
                        borderRadius: 5,
                    }}>Add to Cart</Text>
                </TouchableOpacity>
            </View>
        </Pressable>
    );
}

export default memo(ProductCard);

const styles = StyleSheet.create({
    noCoinsDeliveryBox: {
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
    pressedCard: {
        backgroundColor: "#d0d0d0",
    },
    coinsBox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#F39609",
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
    },
    deliveryBox: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#007C64",
    },
    ratingBox: {
        flexDirection: "row",
        alignItems: "center",
        padding: 6,
    },
    rating: {
        color: "gray",
        fontSize: 12,
        padding: 5,
    },
    coinsSave: {
        color: "orange",
        backgroundColor: "#FFE7B2",
        padding: 4,
        marginLeft: 5,
        alignSelf: "flex-start",
        borderRadius: 5,
        fontSize: 12,
    },
    price: {
        color: "#F96218",
        fontSize: 16,
        padding: 5,
        fontWeight: "bold",
        alignSelf: "flex-start",
    },
    discount: {
        color: "#F96218",
        backgroundColor: "#FDECEF",
        padding: 3,
        borderRadius: 5,
        fontSize: 11,
        fontWeight: "bold",
        marginLeft: 1,
        alignSelf: "flex-start",
    },
    priceDiscountBox: {
        flexDirection: "row",
        alignItems: "center",
    },
    contentBox: {
        padding: 5,
    },
    title: {
        fontWeight: "bold",
        padding: 5,
    },
    delivery: {
        color: "white",
        fontSize: 8,
        fontWeight: "bold",
        padding: 5,
    },
    coins: {
        color: "white",
        fontSize: 8,
        fontWeight: "bold",
        padding: 5,
    },
    card: {
        width: 150,
        backgroundColor: "white",
        borderRadius: 10,
        elevation: 5,
        margin: 10,
        height: 350,
    },
    img: {
        width: 150,
        height: 150,
    },
    imgBox: {
        overflow: "hidden",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    labelsBox: {
        position: "absolute",
        bottom: 0,
        left: 0,
        flexDirection: "row",
    },
});
