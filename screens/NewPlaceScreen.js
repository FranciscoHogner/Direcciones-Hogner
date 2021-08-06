import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

import { COLORS } from '../constants'
import ImageSelector from '../components/ImageSelector';
import { addPlace } from '../store/places.action';
import { useDispatch } from 'react-redux';

const NewPlaceScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [selectedImage, setSelectedImage] = useState('');

    const onHandlerTitle = text => setTitle(text);
    const onHandlerImage = path => setSelectedImage(path);

    const onHandlerSave = () => {
        dispatch(addPlace(title, selectedImage));
        navigation.goBack();
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.label}>Tittle</Text>
                <TextInput
                    placeholder='Image Title'
                    style={styles.input}
                    onChangeText={onHandlerTitle}
                    value={title}
                />
                <ImageSelector onImage={onHandlerImage} />
                <View style={styles.footer}>
                    <Button
                        title="Save Direction"
                        color={COLORS.MAROON}
                        onPress={onHandlerSave}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30,
    },
    label: {
        fontSize: 18,
        marginBottom: 16,
    },
    input: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 2,
        paddingVertical: 4,
    },
    footer: {
        marginTop: 100,
    }
})

export default NewPlaceScreen
