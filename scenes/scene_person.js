/*
    Created by Pham Hoang Phat
    phphat1996@gmail.com
*/

import React, {Component} from 'react';
import {
    ActivityIndicator,
    Text,
    View,
    Image
} from 'react-native';
import { getUserInfo } from '../modules/apis';

export default class ScenePerson extends Component
{
    // region Constructor
    constructor(props)
    {
        super(props);
        this.state = {
            loading: true,
            errorMessage: '',
            userInfo: null
        }
    }
    // endregion

    // region Functions
    fetchUserData()
    {
        this.setState({ loading: true });
        getUserInfo(this.props.personUsername)
            .then((result) => {
                this.setState({ userInfo: result, loading: false, errorMessage: '' });
            })
            .catch((error) => {
               this.setState({ loading: false, errorMessage: error });
            });
    }
    // endregion

    // region Component Mounting
    componentDidMount()
    {
        this.fetchUserData();
    }
    // endregion

    // region MAIN RENDER FUNCTION
    render()
    {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {/* Loading View and User Info View */}
                {
                    this.state.loading ?
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <ActivityIndicator/>

                            <Text style={{ color: 'gray', marginLeft: 10 }}>
                                LOADING USER INFORMATION
                            </Text>
                        </View>
                        :
                        <View style={{ alignItems: 'center' }}>
                            {/* User Information */}
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                {/* User Image */}
                                <View style={{ overflow: 'hidden', borderRadius: 50 }}>
                                    <Image
                                        source={{ uri: this.state.userInfo.avatar_url }}
                                        style={{ width: 100, height: 100, backgroundColor: 'white' }}
                                        resizeMode={'cover'}
                                    />
                                </View>

                                {/* User Name and Location */}
                                <View style={{ marginLeft: 15 }}>
                                    {/* Name */}
                                    <Text style={{ fontSize: 16 }}>
                                        {this.state.userInfo.name}
                                    </Text>

                                    {/* Location */}
                                    <Text style={{ color: 'gray', marginTop: 5 }}>
                                        {this.state.userInfo.location}
                                    </Text>
                                </View>
                            </View>

                            {/* A divider? */}
                            <View style={{ width: 200, height: 1, backgroundColor: 'rgba(0, 0, 0, 0.1)', marginTop: 20 }}/>
                        </View>
                }
            </View>
        );
    }
    // endregion
}