import {FlatList, View} from 'react-native';
import Filters from '../../components/filters';
import ListButton from '../../components/listButton';
import LoadingIndicator from '../../components/loadingIndicator';
import SearchInput from '../../components/searchInput';
import useHome from './hooks/useHome';
import {homeStyles} from './styles/homeStyles';

/**
 * HomeScreen displays the main list of cryptocurrencies.
 *
 * It includes:
 * - A search input to filter by name.
 * - Filter controls for price range and sorting.
 * - A loading indicator while data is being fetched.
 * - A list of filtered and sorted crypto items.
 *
 * Uses the `useHome` hook to manage all state and logic.
 *
 * @returns A React Native screen component with crypto listing and filters.
 */
const HomeScreen = () => {
  const {
    filtered, // The list of cryptos after applying filters
    search, // Search query
    navigation, // Navigation object to move to the detail screen
    loading, // Loading state
    setSearch, // Updates search query
    setMinPrice, // Sets the minimum price filter
    setMaxPrice, // Sets the maximum price filter
    setSortBy, // Sets the sorting option
  } = useHome();

  // Show a loading spinner while fetching data
  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <View style={homeStyles.container}>
      {/* Search input for filtering by name */}
      <SearchInput search={search} setSearch={setSearch} />

      {/* Filter controls for price range and sorting */}
      <Filters
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
        setSortBy={setSortBy}
      />

      {/* List of crypto items */}
      <FlatList
        data={filtered}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ListButton navigation={navigation} item={item} />
        )}
      />
    </View>
  );
};

export default HomeScreen;
