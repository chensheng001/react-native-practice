import React from 'react';
import {View,Text,Image,StyleSheet,Dimensions} from 'react-native'

class Demo01 extends React.Component{
    constructor() {
        super();
        this.state = {
            msg: '这是第一个demo',
            imgData : [
                {
                    title: '1111',
                    url: 'https://facebook.github.io/react/logo-og.png'
                },
                {
                    title: '2222',
                    url: 'https://facebook.github.io/react/logo-og.png'
                },
                {
                    title: '3333',
                    url: 'https://facebook.github.io/react/logo-og.png'
                },
                {
                    title: '4444',
                    url: 'https://facebook.github.io/react/logo-og.png'
                },
                {
                    title: '5555',
                    url: 'https://facebook.github.io/react/logo-og.png'
                },
                {
                    title: '6666',
                    url: 'https://facebook.github.io/react/logo-og.png'
                }
            ]
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {/*<Image style={{resizeMode: 'stretch'}} source={require('../assets/imgs/bd_logo1.png')} />*/}
                {
                    this.state.imgData.map((item,key)=> {
                        return (
                            <View style={styles.outerView} key={key}>
                                <Image source={{uri:item.url}} style={styles.imgStyle}/>
                                <Text>{item.title}</Text>
                            </View>
                        )
                    })
                }
            </View>
        )
    }
}

var {width} = Dimensions.get('window');

var cols =3;
var boxM = 100;
var vMargin = (width - cols * boxM) / (cols + 1);
var hMargin = 20;
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    outerView: {
        width:boxM,
        height: boxM,
        alignItems: 'center',
        backgroundColor: 'gray',
        marginLeft: vMargin,
        marginTop:hMargin
    },
    imgStyle: {
        width:80,
        height:80,
        resizeMode: 'center'
    }
})

export default Demo01;