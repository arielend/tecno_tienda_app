import { useEffect, useState } from "react";
import { StyleSheet, Text, ScrollView, Image, Pressable, Share } from "react-native";
import { Skeleton, Carousel, CustomModal } from "../components";
import Card from "../components/card/Card";
import { colors } from "../global/colors";

import { useSelector, useDispatch } from "react-redux";
import { addItemToCart } from "../features/cartSlice";
import { updateFavorites } from  '../features/authSlice'

import { usePutFavoriteItemsMutation } from '../services/userProfileService'

const ProductDetail = ({ navigation }) => {

    const dispatch = useDispatch();
    const localId = useSelector( state => state.authReducer.localId)
    const userFavorites = useSelector ( state => state.authReducer.favorites)    
    const productSelected = useSelector( state => state.shopReducer.productSelectedById)
    const [ modalVisible, setModalVisible ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(true);
    const isInFavs = userFavorites.some( favId => favId === productSelected.id)

    const launchModal = () => {
        setModalVisible(!modalVisible);
    }

    const [ triggerPutFavoriteItems, result ] = usePutFavoriteItemsMutation()

    const shareUrl = async (urlToShare) => {

        try{
            const result = await Share.share({
                message: (`Compra en Tecno Tienda: ${urlToShare}`)
            })

            if(result.action === Share.dismissedAction){
                if(result.activityType){
                    console.log("Shared with activity type of: ", result.activityType);
                }
                else{
                    console.log("Share action dismissed.")
                }
            }

        }
        catch (error){
            console.log(error.message);
        }        
    }

    const sharingHandler = () => {
        const url = `https://react-pf-endrizzi.vercel.app/item/${productSelected.storeId}`
        const urlTienda = 'https://react-pf-endrizzi.vercel.app'
        shareUrl(urlTienda)        
    }
    
    const setFavoriteHandler = () => {        

        if(!isInFavs){
            const favsUpdated = [...userFavorites, productSelected.id]
            dispatch(updateFavorites(favsUpdated))
            triggerPutFavoriteItems({favsUpdated, localId})
        } else {
            const favsUpdated = userFavorites.filter( favId => favId !== productSelected.id)
            dispatch(updateFavorites(favsUpdated))
            triggerPutFavoriteItems({favsUpdated, localId})
        }
    }

    useEffect(() => {
        setIsLoading(false);
    }, [productSelected.id]);

    const onAddToCart = () => {
        dispatch(
            addItemToCart({
                ...productSelected,
                quantity: 1,
            })
        );
        setModalVisible(!modalVisible);
        navigation.navigate("CartStack", { Screen: "Cart" });
    };

    {
        if (isLoading) {
            return <Skeleton />;
        } else {
            return (
                <>
                    <ScrollView>
                        <Card style={styles.container}>
                            <Text style={styles.title}>
                                {productSelected.name}
                            </Text>

                            <Pressable
                                style={styles.sharePress}
                                onPress={()=> sharingHandler()}
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
                                onPress={() => setFavoriteHandler()}
                                hitSlop={20}
                            >
                                <Image
                                    style={styles.favIcon}
                                    resizeMode="cover"
                                    source={
                                        isInFavs
                                            ? { uri: "https://firebasestorage.googleapis.com/v0/b/tecno-tienda-f68c1.appspot.com/o/img%2Ficons%2FfavAdded_icon3.webp?alt=media&token=879524b2-7346-4f9d-a727-4e454812aaa9",}
                                            : { uri: "https://firebasestorage.googleapis.com/v0/b/tecno-tienda-f68c1.appspot.com/o/img%2Ficons%2FfavRemoved_icon3.webp?alt=media&token=0f649a31-6890-4603-b807-7024ef4516f3",}
                                    }
                                />
                            </Pressable>

                            <Carousel images={productSelected.images} />

                            <Text>{productSelected.description}</Text>
                            <Text style={styles.price}>
                                Precio: $ {productSelected.price}
                            </Text>
                            <Pressable
                                onPress={launchModal}
                                style={({ pressed }) => [
                                    styles.button,
                                    pressed && styles.buttonPressed,
                                ]}
                            >
                                <Text>Agregar al carrito</Text>
                            </Pressable>
                            <Text style={styles.stock}>
                                Stock: {productSelected.stock} u.
                            </Text>
                        </Card>
                    </ScrollView>
                    <CustomModal
                        modalVisible={modalVisible}
                        setModalVisible={setModalVisible}
                        modalTitle={"Mensaje"}
                        modalMessage={"Producto agregado al carrito"}
                        showCancelButton={false}
                        cancelButtonTitle={"Regresar"}
                        confirmButtonTitle={"Aceptar"}
                        confirmButtonHandler={onAddToCart}
                    />
                </>
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

    button: {
        backgroundColor: colors.ligthGray,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 3,
        borderColor: colors.darkGray,
        borderWidth: 1,
    },

    buttonPressed: {
        backgroundColor: colors.skyBlue,
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 3,
        borderColor: colors.darkBlue,
        borderWidth: 1,
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
