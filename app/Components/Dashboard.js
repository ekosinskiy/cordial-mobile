
import React, {Component} from 'react';
import {Content, Text, Spinner, Tab, Tabs} from 'native-base';
import StatView from './StatView';
import AllEMails from './AllEmails';
import {StyleSheet, ScrollView} from 'react-native';

const styles = StyleSheet.create({
    content: {
        padding:10
    }
});

export default class Dashboard extends Component<{}> {


    isLoaded = () => {
        return 'current_billing_period' in this.props.dashboard;
    };

    getContact = () => {
        const data = {
            header: 'Contacts',
            items: [
                {
                    value: this.props.dashboard.current_billing_period.contacts
                }
            ]
        };
        return <StatView data={data}/>
    };

    getAtomated = () => {
        const data = {
            header: 'Current Automated Sending',
            items: [
                {
                    header: 'Live',
                    value: this.props.dashboard.automated_sending.actively
                },
                {
                    header: 'Paused',
                    value: this.props.dashboard.automated_sending.paused
                }
            ]
        };
        return <StatView data={data}/>
    };

    getActivity = () => {
        const data = {
            header: 'Activity - Month to Date',
            items: [
                {
                    header: 'Total Volume Sending',
                    value: this.props.dashboard.current_billing_period.total_send
                },
                {
                    header: 'Campaigns Sent',
                    value: this.props.dashboard.current_billing_period.messages
                }
            ]
        };
        return <StatView data={data}/>
    };

    getCurrentSending = () => {
        const data = {
            header: 'Current Manual Sending',
            items: [
                {
                    header: 'Processing',
                    value: this.props.dashboard.manual_sending.processing
                },
                {
                    header: 'Scheduled',
                    value: this.props.dashboard.manual_sending.scheduled
                }
            ]
        };
        return <StatView data={data}/>
    };

    render() {
        if(!this.isLoaded()) {
            return (
                <Spinner/>
            );
        }
        return (
            <Content>
                <Tabs>
                    <Tab heading="General">
                        <ScrollView style={styles.content}>
                            {this.getActivity()}
                            {this.getContact()}
                            {this.getAtomated()}
                            {this.getCurrentSending()}
                        </ScrollView>
                    </Tab>
                    <Tab heading="All email">
                        <AllEMails stat={this.props.dashboard.email}/>
                    </Tab>
                </Tabs>

            </Content>
        );
    };
}
