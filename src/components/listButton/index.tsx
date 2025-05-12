import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {APP_CONFIG} from '../../config/constants';
import useIcons from '../../hooks/shared/useIcons';
import {listButtonStyles} from './styles/listButtonStyles';
import {ListButtonTypes} from './types/listButtonTypes';

/**
 * ListButton component renders an individual cryptocurrency card in a list.
 * The card displays the cryptocurrency name, symbol, price, and an image.
 * When tapped, it navigates to a detail screen for the selected cryptocurrency.
 *
 * @param {ListButtonTypes} props - The properties for the button.
 * @param {Object} props.navigation - The navigation object used to navigate between screens.
 * @param {Object} props.item - The cryptocurrency data to display on the button.
 * @param {string} props.item.name - The name of the cryptocurrency.
 * @param {string} props.item.symbol - The symbol of the cryptocurrency.
 * @param {string} props.item.getFormattedPrice() - A method to get the formatted price of the cryptocurrency.
 * @param {string} props.item.id - The unique identifier for the cryptocurrency, used for navigation.
 *
 * @returns {React.ReactNode} - JSX representing the cryptocurrency card button.
 */
const ListButton = ({navigation, item}: ListButtonTypes) => {
  // Retrieve the image URL for the cryptocurrency icon using the custom hook `useIcons`
  const {imageUrl} = useIcons({name: item.name ?? ''});

  return (
    <TouchableOpacity
      // Navigate to the DetailScreen when the button is pressed
      onPress={() => navigation.navigate('DetailScreen', {id: item.id})}>
      <View style={listButtonStyles.card}>
        {/* Display the cryptocurrency image if it exists */}
        {imageUrl && (
          <Image source={{uri: imageUrl}} style={listButtonStyles.image} />
        )}
        {/* Display the cryptocurrency name, symbol, and formatted price */}
        <View style={listButtonStyles.infoContainer}>
          <Text style={listButtonStyles.cryptoName}>
            {item.name} ({item.symbol})
          </Text>
          <Text>
            {item.getFormattedPrice()} {APP_CONFIG.DEFAULT_CURRENCY}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListButton;
