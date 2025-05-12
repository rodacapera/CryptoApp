import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {loadingIndicatorStyles} from './styles/loadingIndicatorStyles';

/**
 * LoadingIndicator component displays a loading spinner when content is being fetched or processed.
 * It uses the `ActivityIndicator` component from React Native to show a loading spinner.
 *
 * @returns {React.ReactNode} JSX representing the loading spinner.
 */
const LoadingIndicator = () => (
  <View style={loadingIndicatorStyles.container}>
    {/* Display a large loading spinner with blue color */}
    <ActivityIndicator size="large" color="#0000ff" />
  </View>
);

export default LoadingIndicator;
