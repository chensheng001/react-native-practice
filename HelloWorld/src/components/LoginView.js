import React, {Component} from 'react';
import {View,Text,Image,StyleSheet,Dimensions,TextInput} from 'react-native'

class LoginView extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imgView}>
                    <Image source={require('../assets/imgs/qq/icon.png')} style={styles.imgStyle}/>
                </View>
                <View style={styles.inputView}>
                    <TextInput placeholder={'请输入用户名'} style={styles.inputStyle} />
                    <TextInput placeholder={'请输入密码'} password={true} style={styles.inputStyle} />
                </View>
                <View style={styles.buttonView}>
                    <Text style={styles.buttonStyle}>登录</Text>
                </View>
                <View style={styles.linkView}>
                    <Text style={styles.linkStyle}>新用户注册</Text>
                    <Text style={styles.linkStyle}>忘记密码?</Text>
                </View>
                <View style={styles.otherView}>
                    <Text>其他方式:</Text>
                    <Image style={styles.otherImgStyle} source={require('../assets/imgs/qq/icon3.png')}/>
                    <Image style={styles.otherImgStyle} source={require('../assets/imgs/qq/icon7.png')}/>
                    <Image style={styles.otherImgStyle} source={require('../assets/imgs/qq/icon8.png')}/>
                </View>
            </View>
        )
    }
}
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        backgroundColor:'#ddd',
        flex:1,
        alignItems: 'center'
    },
    imgView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 80,
        marginBottom:30
    },
    imgStyle: {
        width:80,
        height: 80,
        borderRadius: 40,
        borderColor: '#fff',
        borderWidth:4,
    },
    buttonView: {
        marginTop: 20
    },
    buttonStyle: {
      width: width * 0.9,
      backgroundColor: '#00c1e0',
      color:'#fff',
      height:40,
      borderRadius:5,
      textAlign:'center',
      lineHeight: 40,
      fontSize:16
    },
    inputView: {

    },
    inputStyle: {
        width: width,
        backgroundColor: '#fff',
        textAlign: 'center',
        marginBottom:1
    },
    linkView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width * 0.9,
        marginTop: 20
    },
    linkStyle: {
        color: '#00c1e0'
    },
    otherView: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        width: width * 0.9
    },
    otherImgStyle: {
        width: 40,
        height: 40,
        borderRadius:20,
        marginLeft:2
    }
})

export default LoginView;
