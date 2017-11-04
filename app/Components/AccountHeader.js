import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import {Header, Button, Text, Right, Left, Body} from 'native-base';


const styles = StyleSheet.create({
    image: {
        width: 83,
        height: 30
    },
    content: {
        backgroundColor: "#404041"
    },
    body: {
        paddingLeft: 15
    }
});

export default class AccountHeader extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Header style={styles.content}>
                <Left>
                    <Image style={styles.image} source={require('../../images/cordial-logo-2.png')}/>
                </Left>
                <Body style={styles.body}>


                </Body>
                <Right>
                    <Button danger onPress={this.props.logout}>
                        <Text>Logout</Text>
                    </Button>
                </Right>
            </Header>
        );
    }
}