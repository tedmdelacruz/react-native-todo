import React, { Component } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'

export default class TodoItem extends Component {
    render() {
        const todo = this.props.children

        return (
            <View style={{ padding: 20 }}>
                <Text style={{ fontSize: 20 }}>{todo}</Text>
            </View>
        )
    }
}
