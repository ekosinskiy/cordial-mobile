
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
        paddingLeft: 10,
        paddingRight: 10
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

    constructor(props) {
        super(props);
        this.state = {
            server: '',
            username: ''
        };
        if('serverName' in props.loginForm) {
            this.state['server'] = props.loginForm['serverName'];
        }

        if('email' in props.loginForm) {
            this.state['username'] = props.loginForm['email'];
        }
    }


    render() {
        return (
            <View style={styles.content}>
                <View style={styles.imageBox}>
                    <Image style={styles.image} source={require('../../images/cordial-logo-2.png')}/>
                </View>
                <Form>
                    <Content style={styles.form}>
                        <Item floatingLabel>
                            <Label>Server</Label>
                            <Input value={this.state.server} onChangeText={(server) => this.setState({server})}/>
                        </Item>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input value={this.state.username} onChangeText={(username) => this.setState({username})}/>
                        </Item>
                        <Item floatingLabel>
                            <Label>Password</Label>
                            <Input secureTextEntry={true} onChangeText={(password) => this.setState({password})}/>
                        </Item>
                        <Button style={{marginTop:10}} block info onPress={() => this.props.loginAction(this.state.server, 'test1@cordial.io','farm1234')}>
                            <Text>Login</Text>
                        </Button>
                    </Content>
                </Form>
            </View>

        );
    }
}