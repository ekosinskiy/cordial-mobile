import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Content, Text, Spinner, Tab, Tabs, Col, Row, Grid} from 'native-base';

const styles = StyleSheet.create({
    row: {
        marginTop: 15
    },
    content: {
        marginRight: 10,
        marginLeft: 10
    },
    header: {
        fontSize: 20,
        fontWeight: "bold"
    },
    value: {
        fontWeight: "bold"
    },
    light: {
        color: "grey"
    }
});

export default class EmailStat extends Component {

    getRatioBetweenNum = (num1, num2) => {
        if(num2 == 0) {
            return (0).toFixed(2);
        }
        return (num1/num2*100).toFixed(2);
    };

    getOpenedRate = (stat) => {
        return this.getRatioBetweenNum(stat['unique-opened'].count, stat.delivered.count);
    };

    getCTOR = (stat) => {
        return this.getRatioBetweenNum(stat['unique-opened'].count, stat['unique-opened'].count);
    };

    getClickRate = (stat) => {
        return this.getRatioBetweenNum(stat['unique-clicked'].count, stat.delivered.count);
    };

    getOptoutPercent = (stat) => {
        return this.getRatioBetweenNum(stat.optouts.count, stat.delivered.count);
    };

    getComplaintPercent = (stat) => {
        return this.getRatioBetweenNum(stat.complaints.count, stat.delivered.count);
    };

    render() {
        let stat = this.props.stat;
        return (
            <Content style={styles.content}>
                <Grid>
                    <Row style={styles.row}>
                        <Col>
                            <Text style={styles.header}>Sent</Text>
                            <Text style={styles.value}>{stat.sends.count}</Text>
                        </Col>
                        <Col>
                            <Text style={styles.header}>Delivered</Text>
                            <Text style={styles.value}>{stat.delivered.percent}%</Text>
                            <Text>{stat.delivered.count} <Text style={styles.light}>Total</Text></Text>
                        </Col>
                        <Col>
                            <Text style={styles.header}>Bounced</Text>
                            <Text style={styles.value}>{stat.bounced.percent}%</Text>
                            <Text>{stat.bounced.count} <Text style={styles.light}>Total</Text></Text>
                        </Col>
                    </Row>
                    <Row style={styles.row}>
                        <Col>
                            <Text style={styles.header}>Opened</Text>
                            <Text style={styles.value}>{this.getOpenedRate(stat)}%</Text>
                            <Text>{stat['unique-opened'].count} <Text style={styles.light}>Unique</Text></Text>
                            <Text>{stat['total-opened'].count} <Text style={styles.light}>Total</Text></Text>
                        </Col>
                        <Col>
                            <Text style={styles.header}>Clicked</Text>
                            <Text style={styles.value}>{this.getCTOR(stat)}% CTOR</Text>
                            <Text>{stat['unique-clicked'].count} <Text style={styles.light}>Unique</Text></Text>
                            <Text>{stat['total-clicked'].count} <Text style={styles.light}>Total</Text></Text>
                            <Text>{this.getClickRate(stat)}% <Text style={styles.light}>Click Rate</Text></Text>
                        </Col>
                        <Col>
                            <Text style={styles.header}>Opt Outs</Text>
                            <Text style={styles.value}>{this.getOptoutPercent(stat)}%</Text>
                            <Text>{stat.optouts.count} <Text style={styles.light}>Total</Text></Text>
                        </Col>
                    </Row>
                    <Row style={styles.row}>
                        <Col>
                            <Text style={styles.header}>Complaints</Text>
                            <Text style={styles.value}>{this.getComplaintPercent(stat)}%</Text>
                            <Text style={styles.value}>{stat.complaints.count} <Text style={styles.light}>Total</Text></Text>
                        </Col>
                    </Row>

                </Grid>
            </Content>
        );
    }
}
