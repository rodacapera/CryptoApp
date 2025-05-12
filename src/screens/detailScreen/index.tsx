import React from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import {Props} from '../../navigation/types/navigationTypes';
import useIcons from '../../hooks/shared/useIcons';
import useDetailScreen from './hooks/useDetailScreen';
import {detailStyles} from './styles/detailStyles';
import DetailRow from './components/detailRow';

/**
 * DetailScreen displays detailed information about a selected cryptocurrency.
 *
 * This screen shows:
 * - A loading indicator while data is being fetched.
 * - An error message if cryptocurrency details cannot be loaded.
 * - The cryptocurrency's icon, name, symbol, price, market cap, 24h volume,
 *   change percentage, supply, and rank.
 *
 * @param route The navigation route, containing the cryptocurrency ID in `params`.
 * @returns A React Native screen component with cryptocurrency details.
 */
const DetailScreen = ({route}: Props) => {
  // Fetching the crypto data and loading state from the custom hook
  const {crypto, loading} = useDetailScreen({id: route.params.id});
  // Fetching the icon URL for the crypto using the useIcons hook
  const {imageUrl} = useIcons({name: crypto?.name ?? ''});

  // Display loading spinner while fetching the data
  if (loading) {
    return (
      <View style={detailStyles.centered}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  // Handle error if crypto data couldn't be loaded
  if (!crypto) {
    return (
      <View style={detailStyles.centered}>
        <Text>Error loading cryptocurrency details</Text>
      </View>
    );
  }

  return (
    <View style={detailStyles.container}>
      {/* Header with crypto icon and title */}
      <View style={detailStyles.header}>
        {imageUrl && (
          <Image
            source={{uri: imageUrl}}
            style={detailStyles.icon}
            defaultSource={require('../../assets/default_logo.png')}
          />
        )}
        <Text style={detailStyles.title}>
          {crypto.name} ({crypto.symbol})
        </Text>
      </View>

      {/* Detail rows showing various crypto stats */}
      <View style={detailStyles.detailBox}>
        <DetailRow label="Price" value={`${crypto.getFormattedPrice()} USD`} />
        <DetailRow label="Market Cap" value={`$${crypto.market_cap_usd}`} />
        <DetailRow label="24h Volume" value={`$${crypto.volume24}`} />
        <DetailRow label="24h Change" value={`${crypto.percent_change_24h}%`} />
        <DetailRow label="Supply" value={crypto.csupply} />
        <DetailRow label="Rank" value={`#${crypto.rank}`} />
      </View>
    </View>
  );
};

export default DetailScreen;
