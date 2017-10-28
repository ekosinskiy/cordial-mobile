import React, {Component} from 'react';
import {Content, Text, Spinner, Tab, Tabs} from 'native-base';
import EmailStat from './EmailStat';

export default class AllEmails extends Component {

    render() {
        return(
            <Tabs>
                <Tab heading="Today">
                    <EmailStat stat={this.props.stat['midnight']}/>
                </Tab>
                <Tab heading="Past 7 days">
                    <EmailStat stat={this.props.stat['7days']}/>
                </Tab>
                <Tab heading="Past 30 days">
                    <EmailStat stat={this.props.stat['30days']}/>
                </Tab>
                <Tab heading="Current year to date">
                    <EmailStat stat={this.props.stat['year']}/>
                </Tab>
            </Tabs>
        );
    }
}
