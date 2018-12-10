import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { 
    NavigationAction,
    StackNavigator,
    TabNavigator
 } from 'react-navigation';
 import {  
    createReactNavigationReduxMiddleware,
    reduxifyNavigator,
 } from 'react-navigation-redux-helpers'
 import { Text, View, StyleSheet } from 'react-native';
 import { connect } from 'react-redux';

 