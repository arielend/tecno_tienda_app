import { View, Text, Modal, Pressable } from 'react-native'
import { styles } from './styles'

const CustomModal = (
    {modalVisible,
    setModalVisible,
    showCancelButton,
    modalTitle,
    modalMessage,
    cancelButtonTitle,
    confirmButtonTitle,
    confirmButtonHandler,}
) => {

    return (
        
        <Modal animationType="slide" transparent={true} visible={modalVisible}>

            <View style={styles.container}>

                <View style={styles.modal}>

                    <View style={styles.modalHeader}>
                        <Text style={styles.modalTitle}>{modalTitle}</Text>
                    </View>

                    <View style={styles.modalBody}>
                        <Text style={styles.modalMessage}>{modalMessage}</Text>
                    </View>

                    <View style={styles.modalFooter}>
                        {
                            showCancelButton && 
                            <Pressable
                            style={({pressed})=>[
                                styles.button,
                                pressed && styles.buttonPressed
                            ]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text>{cancelButtonTitle}</Text>
                            </Pressable>
                        }                        

                        <Pressable
                            style={({pressed})=>[
                                styles.button,
                                pressed && styles.buttonPressed
                            ]}
                            onPress={() => confirmButtonHandler()}
                        >
                            <Text>{confirmButtonTitle}</Text>
                        </Pressable>

                    </View>

                </View>

            </View>

        </Modal>
    )
}

export default CustomModal