import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ResultsDetails = ({result}) => {
    return(
        <View style={styles.containerStyle}>
            <Image 
                source={{uri: result.image_url}}
                style={styles.imageStyle}
            />
            <Text style = {styles.nameStyle}>{result.name}, </Text>
            <Text>{result.rating} Stars, {result.review_count} reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    containerStyle:{
        marginLeft:15
    },
    imageStyle:{
        height:140,
        width:250,
        borderRadius: 10,
        marginBottom:5
    },
    nameStyle:{
        fontWeight:'bold',
        fontSize: 15
    }
});

export default ResultsDetails;