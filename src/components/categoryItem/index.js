import { Text, TouchableOpacity, Image } from "react-native"
import { styles } from "./styles"
import { Card } from "../../components"

const CategoryItem = ({title, img, navigation}) => {
    
    return(
        <TouchableOpacity onPress={()=>navigation.navigate("products", {title})}>
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