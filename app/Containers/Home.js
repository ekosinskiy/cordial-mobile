import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Container, Content, Button, Footer, FooterTab, Text} from 'native-base';
import Login from '../Components/Login';
import Dashboard from '../Components/Dashboard';
import AccountHeader from '../Components/AccountHeader';

class Home extends Component {



    login = (server, login, password) => {
        this.props.login(server, login, password, this.props.getDashboard);
    };

    logout = () => {
        this.props.logout();
    };

    isLogin = () => {
        return 'userID' in this.props.account;
    };

    render() {
        let form = <Login loginAction={this.login} loginForm={this.props.loginForm}/>;
        let header;
        if(this.isLogin()) {
            this.props.currentAccount = {
                accountID: 11,
                accountName: "Cordial"
            };
            this.props.accountList = [
                {
                    useAccountsID: 176,
                    accountName: "Findit"
                },
                {
                    useAccountsID: 175,
                    accountName: "Cordial"
                }
            ];
            form = <Dashboard dashboard={this.props.dashboard}/>;
            header = <AccountHeader
                logout={this.logout}
                currentAccount={this.props.currentAccount}
            />
        }
        return (
            <Container>
                {header}
                <Content>
                    {form}
                </Content>
                <Footer>
                    <FooterTab>
                        <Button light>
                            <Text>Cordial Experiences, Inc</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

function mapsStateToProps(state) {
    return {
        account: state.loginRecipes,
        dashboard: state.dashboardRecipe,
        serverName: state.serverRecipe,
        loginForm: state.loginFormRecipe
    }
}

export default connect(mapsStateToProps)(Home);