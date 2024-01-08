import { useEffect, useState } from "react"
import { StyleSheet, Text, ScrollView, Image, Pressable } from "react-native"
import { Skeleton, Carousel } from "../components"
import Card from "../components/card/Card"
import { colors } from "../global/colors"

import { useSelector, useDispatch } from "react-redux"
import { addItemToCart } from "../features/cartSlice"

const ProductDetail = () => {

    const dispatch = useDispatch()

    const productSelected = useSelector(
        (state) => state.shopReducer.productSelectedById
    );

    const [isLoading, setIsLoading] = useState(true);
    const [favorite, setFavorite] = useState(false);

    const favoriteHandler = () => {
        setFavorite(!favorite);
    };

    useEffect(() => {
        setIsLoading(false);
    }, [productSelected.id]);

    const onAddToCart = () => {
        dispatch(addItemToCart({
            ...productSelected,
            quantity: 1
        }))
    }

    {
        if (isLoading) {
            return <Skeleton />;
        } else {
            return (
                <ScrollView>
                    <Card style={styles.container}>
                        <Text style={styles.title}>{productSelected.name}</Text>

                        <Pressable
                            style={styles.sharePress}
                            onPress={null}
                            hitSlop={20}
                        >
                            <Image
                                style={styles.shareIcon}
                                resizeMode="cover"
                                source={{
                                    uri: "https://firebasestorage.googleapis.com/v0/b/tecno-tienda-f68c1.appspot.com/o/img%2Ficons%2Fshare_icon3.webp?alt=media&token=487570dd-3ad6-41cd-864d-17150933d467",
                                }}
                            />
                        </Pressable>

                        <Pressable
                            style={styles.favPress}
                            onPress={() => favoriteHandler()}
                            hitSlop={20}
                        >
                            <Image
                                style={styles.favIcon}
                                resizeMode="cover"
                                source={
                                    favorite ? {uri: "https://firebasestorage.googleapis.com/v0/b/tecno-tienda-f68c1.appspot.com/o/img%2Ficons%2FfavAdded_icon3.webp?alt=media&token=879524b2-7346-4f9d-a727-4e454812aaa9"}
                                    : {uri: "https://firebasestorage.googleapis.com/v0/b/tecno-tienda-f68c1.appspot.com/o/img%2Ficons%2FfavRemoved_icon3.webp?alt=media&token=0f649a31-6890-4603-b807-7024ef4516f3"}
                                }
                            />
                        </Pressable>

                        <Carousel images={productSelected.images}/>

                        <Text>{productSelected.description}</Text>
                        <Text style={styles.price}>
                            Precio: $ {productSelected.price}
                        </Text>
                        <Pressable
                            onPress={onAddToCart}
                            style={({pressed})=>[
                                styles.button,
                                pressed && styles.buttonPressed
                            ]}>
                            <Text>Agregar al carrito</Text>
                        </Pressable>
                        <Text style={styles.stock}>
                            Stock: {productSelected.stock} u.
                        </Text>
                    </Card>
                </ScrollView>
            );
        }
    }
};

export default ProductDetail;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        margin: 20,
        backgroundColor: "white",
        alignItems: "center",
        rowGap: 15,
    },

    title: {
        fontWeight: "bold",
        marginBottom: 30,
    },

    price: {
        color: colors.orange,
        fontWeight: "bold",
    },

    button:{
        backgroundColor: colors.ligthGray,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 3,
        borderColor: colors.darkGray,
        borderWidth: 1
    },

    buttonPressed:{
        backgroundColor: colors.skyBlue,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 3,
        borderColor: colors.darkBlue,
        borderWidth: 1
    },

    stock: {
        color: colors.yellow,
    },

    sharePress: {
        position: "absolute",
        top: 85,
        left: 30,
        width: 40,
        height: 40,
        zIndex: 1,
    },

    shareIcon: {
        width: 35,
        height: 35,
    },

    favPress: {
        position: "absolute",
        top: 85,
        right: 30,
        width: 40,
        height: 40,
        zIndex: 1,
    },

    favIcon: {
        width: 35,
        height: 35,
    },

    productImage: {
        width: 350,
        height: 350,
    },
});
