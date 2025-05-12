import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {searchInputStyles} from './styles/searchInputStyles';
import {SearchInputTypes} from './types/searchInputTypes';

/**
 * SearchInput component allows users to input search queries.
 * It displays an input field with a search icon that changes color when focused.
 *
 * @param {Object} props
 * @param {string} props.search - The current search query.
 * @param {Function} props.setSearch - Function to update the search query.
 *
 * @returns {React.ReactNode} JSX for the search input field with icon.
 */
const SearchInput = ({search, setSearch}: SearchInputTypes) => {
  // State to track if the input is focused or not
  const [focused, setFocused] = useState(false);

  return (
    <View
      style={[
        searchInputStyles.container,
        focused && searchInputStyles.containerFocused,
      ]}>
      {/* Search icon that changes color based on focus */}
      <Icon
        name="search"
        size={20}
        color={focused ? '#e405e7' : '#888'}
        style={searchInputStyles.icon}
      />

      {/* TextInput for searching */}
      <TextInput
        placeholder="Search..."
        value={search}
        onChangeText={setSearch}
        style={searchInputStyles.input}
        placeholderTextColor="#888"
        onFocus={() => setFocused(true)} // Set focus state to true when input is focused
        onBlur={() => setFocused(false)} // Set focus state to false when input loses focus
        selectionColor="#e405e7" // Color of the cursor when focused
        underlineColorAndroid="transparent" // Prevent the blue underline on Android
      />
    </View>
  );
};

export default SearchInput;
