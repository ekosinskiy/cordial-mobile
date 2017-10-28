
import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Container, Header, Content, Form, Item, Input, Label, Button, Text} from 'native-base';

const styles = StyleSheet.create({
    content: {
        backgroundColor: "#404041",
        flex: 1
    },
    form: {
        backgroundColor: "white",
    },
    image: {
        width: 220,
        height: 80
    },
    imageBox: {
        height: 120,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default class Login extends Component<{}> {

    render() {
        return (
            <View style={styles.content}>
                <View style={styles.imageBox}>
                    <Image style={styles.image} source={require('../../images/cordial-logo-2.png')}/>
                </View>
                <Form>
                    <Content style={styles.form}>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Label>Password</Label>
                            <Input />
                        </Item>
                        <Button style={{marginTop:10}} block info onPress={() => this.props.loginAction('test1@cordial.io','farm1234')}>
                            <Text>Login</Text>
                        </Button>
                    </Content>
                </Form>
            </View>

        );
    }
}