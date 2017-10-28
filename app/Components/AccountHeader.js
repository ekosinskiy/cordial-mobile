import React, {Component} from 'react';
import {Header, Button, Text, Right} from 'native-base';

export default class AccountHeader extends Component {

    render() {
        return (
            <Header>
                <Right>
                    <Button danger onPress={this.props.logout}>
                        <Text>Logout</Text>
                    </Button>
                </Right>
            </Header>
        );
    }
}