/*
    Created by Pham Hoang Phat
    phphat1996@gmail.com
*/

import React, {Component} from 'react';
import {
    StatusBar,
    View
} from 'react-native';
import {
    Stack,
    Scene,
    Router,
    Actions
} from 'react-native-router-flux';

import ScenePerson from './scenes/scene_person';
import SceneHome from './scenes/scene_home';

export default class App extends Component
{
    // region Constructor
    constructor(props)
    {
        super(props);

        // region Scene Creator
        this.scenes = Actions.create(
            <Stack key="root"
                   navigationBarStyle={{ backgroundColor: 'rgb(3, 155, 229)' }}
                   navBarButtonColor={'rgba(255, 255, 255, 0.5)'}
                   titleStyle={{ color: 'white', fontWeight: 'normal' }}>

                <Scene key={'home'} title={'HOME'} component={SceneHome} initial={true}/>
                <Scene key={'person'} title={'PERSON'} component={ScenePerson}/>
            </Stack>
        )
        // endregion
    }
    // endregion

    // region MAIN RENDER FUNCTION
    render()
    {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <StatusBar barStyle={'light-content'}/>
                <Router scenes={this.scenes}/>
            </View>
        );
    }
    // endregion
}
