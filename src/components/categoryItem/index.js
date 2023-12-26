import { Text, TouchableOpacity, Image } from "react-native"
import { styles } from "./styles"
import Card from "../../components/card/Card"

import { useDispatch } from "react-redux"
import { setCategorySelected, setProductsFilteredByCategory } from "../../features/shopSlice"

const CategoryItem = ({title, img, navigation}) => {

    const dispatch = useDispatch()
    
    return(
        <TouchableOpacity onPress={()=>{
            dispatch(setCategorySelected(title))
            dispatch(setProductsFilteredByCategory(title))
            navigation.navigate("products")
            }}>
            <Card style={styles.categoryItemContainer}>
                <Text style={styles.cardText}>{title}</Text>
                <Image
                    style={styles.cardImg}
                    resizeMode="cover"
                    source={{ uri: img }}
                />
            </Card>            
        </TouchableOpacity>
    )
}

export default CategoryItem