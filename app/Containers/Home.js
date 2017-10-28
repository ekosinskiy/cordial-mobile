import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Container, Content, Button, Footer, FooterTab, Text} from 'native-base';
import Login from '../Components/Login';
import Dashboard from '../Components/Dashboard';
import AccountHeader from '../Components/AccountHeader';

class Home extends Component {



    login = (login, password) => {
        this.props.login(login, password, this.props.getDashboard);
    };

    logout = () => {
        this.props.logout();
    };

    isLogin = () => {
        return 'userID' in this.props.account;
    };

    render() {
        console.log(this.props);
        let form = <Login loginAction={this.login}/>;
        let header;
        if(this.isLogin()) {
            form = <Dashboard dashboard={this.props.dashboard}/>;
            header = <AccountHeader logout={this.logout}/>
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
        dashboard: state.dashboardRecipe
    }
}

export default connect(mapsStateToProps)(Home);