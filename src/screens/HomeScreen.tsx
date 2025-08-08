import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import MyToast from '../components/MyToast';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState, AppDispatch } from '../redux/store';
import { fetchProducts, addProduct } from '../redux/productThunks';

type HomeScreenProps = {
    navigation: any;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    const { items, fetchLoading, fetchError, addError, addLoading } = useSelector((state: RootState) => state.products);
    const { totalQuantity } = useSelector((state: RootState) => state.cart);
    const [toastVisible, setToastVisible] = useState(false);
    const [toastText, setToastText] = useState('');
    const dispatch = useDispatch<AppDispatch>();
    const [showForm, setShowForm] = useState(false);

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const showToast = (msg: string) => {
        setToastText(msg);
        setToastVisible(true);
    };

    if (fetchLoading) {
        return <Text style={{
            fontSize: 24,
            fontWeight: 'bold',
            margin: 10,
            textAlign: 'center',
        }}>Loading Products...</Text>;
    }
    if (fetchError) {
        return <Text style={{
            fontSize: 24,
            fontWeight: 'bold',
            margin: 10,
            textAlign: 'center',
        }}>Error Loading Products: {fetchError}</Text>;
    }

    const handleAddProduct = () => {
        if (title && price && description && category) {
            const newProduct = {
                id: items.length + 1, // Simple ID generation
                title,
                price: parseFloat(price),
                description,
                category,
                image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png', // Placeholder image
            };
            dispatch(addProduct(newProduct));
            if (addError) {
                showToast(`Error: ${addError}`);
            }
            if(!addLoading && !addError) {
                showToast('Product added successfully!');
                setShowForm(false);
                setTitle('');
                setPrice('');
                setDescription('');
                setCategory('');
            }
            
        } else {
            showToast('Please fill all fields!');
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{height: 700}}>
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
                <TouchableOpacity style={{
                    backgroundColor: "#6d5b89ff",
                    padding: 6,
                    borderRadius: 5,
                    marginHorizontal: 20,
                    marginVertical: 10,
                }} onPress={() => {
                    setShowForm(!showForm);
                    setTitle('');
                    setPrice('');
                    setDescription('');
                    setCategory('');
                    showToast('Add Product Form Toggled');
                }}>
                    <Text style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                        margin: 10,
                        textAlign: 'center',
                        color: 'white',
                    }}>Add New Product</Text>
                </TouchableOpacity>
                {
                    showForm && (
                        <View>
                            <Text style={{
                                fontSize: 24,
                                fontWeight: 'bold',
                                margin: 10,
                            }}>Add Product</Text>
                            <TextInput
                                placeholder='Title'
                                style={{
                                    borderWidth: 1,
                                    borderColor: '#000000',
                                    borderRadius: 5,
                                    padding: 10,
                                    marginHorizontal: 20,
                                    marginBottom: 10,
                                }}
                                value={title}
                                onChangeText={setTitle}
                            />
                            <TextInput
                                placeholder='Price'
                                style={{
                                    borderWidth: 1,
                                    borderColor: '#000000',
                                    borderRadius: 5,
                                    padding: 10,
                                    marginHorizontal: 20,
                                    marginBottom: 10,
                                }}
                                value={price}
                                onChangeText={setPrice}
                            />
                            <TextInput
                                placeholder='Description'
                                style={{
                                    borderWidth: 1,
                                    borderColor: '#000000',
                                    borderRadius: 5,
                                    padding: 10,
                                    marginHorizontal: 20,
                                    marginBottom: 10,
                                }}
                                value={description}
                                onChangeText={setDescription}
                            />
                            <TextInput
                                placeholder='Category'
                                style={{
                                    borderWidth: 1,
                                    borderColor: '#000000',
                                    borderRadius: 5,
                                    padding: 10,
                                    marginHorizontal: 20,
                                    marginBottom: 10,
                                }}
                                value={category}
                                onChangeText={setCategory}
                            />
                            <TouchableOpacity style={{
                                backgroundColor: "#6d5b89ff",
                                padding: 6,
                                borderRadius: 5,
                                marginHorizontal: 20,
                                marginVertical: 10,
                            }} onPress={() => {
                                handleAddProduct();
                            }}>
                                <Text style={{
                                    fontSize: 24,
                                    fontWeight: 'bold',
                                    margin: 10,
                                    textAlign: 'center',
                                    color: 'white',
                                }}>
                                    {addLoading ? <ActivityIndicator color="white" /> : 'Add Product'}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )
                }
            </ScrollView>

            <FlatList
                data={items}
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

