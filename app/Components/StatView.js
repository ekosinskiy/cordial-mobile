import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Content, Text, Spinner} from 'native-base';


const styles = StyleSheet.create({
    content: {
        margin:10
    },
    header: {
        marginTop: 10,
        fontWeight: "200",
        fontSize: 24
    },
    subHeader: {
        fontWeight: "200",
        fontSize: 18
    },
    values: {
        fontWeight: "bold",
        fontSize: 18
    }
});

export default class StatView extends Component {

    getElement = (dataElements, label, item, style) => {
        if(label in item) {
            dataElements.push(<Text key={dataElements.length} style={style}>{item[label]}</Text>);
        }
        return dataElements;
    };

    render() {
        //console.log("DATA:::", this.props);
        let data = this.props.data;
        let dataOutput = [];
        dataOutput.push(<Text key="0" style={styles.header}>{data.header}</Text>);
        data.items.forEach((item) => {
            dataOutput = this.getElement(dataOutput, 'header', item, styles.subHeader);
            dataOutput = this.getElement(dataOutput, 'value', item, styles.values);
        });

        return (
            <Content>
                {dataOutput}
            </Content>
        );
    }
}
