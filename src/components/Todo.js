import React, { Component } from 'react'
import {
    View,
    ListView,
    Text,
    TextInput,
    ToolbarAndroid,
    TouchableHighlight,
} from 'react-native'

import TodoItem from './TodoItem'
import TodoInput from './TodoInput'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

        this.state = {
            isCreateMode: false,
            todoInput: '',
            items: ds.cloneWithRows(['Fix boots', 'Fix Les Paul', 'Buy groceries'])
        }
    }

    toggleCreateMode() {
        let isCreateMode = this.state.isCreateMode 
        this.setState({
            isCreateMode: ! isCreateMode
        }) 
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <ToolbarAndroid
                        style={{ flex: 8, padding: 30, height: 50, backgroundColor: 'lightgrey' }}
                        title="Simple Todo">
                    </ToolbarAndroid>
                    <TouchableHighlight style={{ flex: 2, backgroundColor: 'grey', padding: 5, height: 60 }}
                        onPress={this.toggleCreateMode.bind(this) }>

                        <Text style={{ textAlign: 'center', color: 'white', fontSize: 40 }}>
                            { this.state.isCreateMode ? '✕' : '+' }
                        </Text>
                    </TouchableHighlight>
                </View>
                { this.state.isCreateMode ? <TodoInput/> : null }
                <ListView
                    style={{ flex: 8 }}
                    enableEmptySections={true}
                    dataSource={this.state.items}
                    renderRow={item => <TodoItem>{item}</TodoItem>}/>
            </View>
        )
    }
}
