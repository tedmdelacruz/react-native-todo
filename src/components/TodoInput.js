import React, { Component } from 'react'
import { View, TextInput } from 'react-native'

export default class TodoInput extends Component {
    handleSubmit(event) {
        console.log(event.nativeEvent.text)
    }

    render() {
        return (
            <View style={{ flex: 1, padding: 10 }}>
                <TextInput
                    placeholder="What are you going to do?"
                    onSubmitEditing={this.handleSubmit.bind(this)}
                    autoFocus={true} />
            </View>
        )
    }
}
