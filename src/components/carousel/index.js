import { View, Image } from 'react-native'
import Swiper from 'react-native-swiper'
import { styles } from './styles'
import { colors } from '../../global/colors'

const Carousel = ({images}) => {

    return(
        <Swiper 
            style={styles.container}
            showsButtons={true}
            prevButton={<Image source={require('./assets/prev_arrow.webp')} style={styles.prevArrow}/>}
            nextButton={<Image source={require('./assets/next_arrow.webp')} style={styles.nextArrow}/>}
            activeDotColor='orange'
            >
            {
                images.map(
                    (image, index) => (
                        <View key={index} style={styles.slide}>
                            <Image source={{uri:image}} style={styles.image}/>
                        </View>                        
                    )
                )
            }            
        </Swiper>
    )
}

export default Carousel