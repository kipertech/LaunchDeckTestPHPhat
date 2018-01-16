/*
    Created by Pham Hoang Phat
    phphat1996@gmail.com
*/

import React, {Component} from 'react';
import {
    Text,
    View,
    Button
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class SceneHome extends Component
{
    // region Constructor
    constructor(props)
    {
        super(props);
        this.topFive = ["GrahamCampbell", "fabpot", "weierophinney", "rkh", "josh"];
    }
    // endregion

    // region Render Button
    renderButton(title, index)
    {
        return(
            <Button
                key={`button${index}`}
                onPress={() => Actions.person({ personUsername: title })}
                title={title}
                color={'rgb(3, 155, 229)'}
            />
        )
    }
    // endregion

    // region MAIN RENDER FUNCTION
    render()
    {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {/* Title */}
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                    Top 5 GitHub Users
                </Text>

                {/* Description */}
                <Text style={{ color: 'rgba(0, 0, 0, 0.5)', marginTop: 10 }}>
                    Tap the username to see more information
                </Text>

                {/* User List */}
                <View style={{ alignSelf: 'stretch', alignItems: 'center', marginHorizontal: 40, marginTop: 30 }}>
                    {this.topFive.map((item, index) => this.renderButton(item, index))}
                </View>
            </View>
        );
    }
    // endregion
}