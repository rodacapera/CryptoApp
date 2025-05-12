import {useNavigation} from '@react-navigation/native';
import {useState, useEffect} from 'react';
import Crypto from '../../../models/Crypto';
import {HomeScreenNavigationProp} from '../../../navigation/types/navigationTypes';
import CryptoService from '../../../services/CryptoService';

/**
 * Custom hook for managing the state and logic of the HomeScreen.
 * It fetches cryptocurrency data, handles filtering, searching, and sorting.
 *
 * It returns the filtered list of cryptocurrencies, search text, navigation,
 * loading state, and functions for modifying search, price range, and sort criteria.
 *
 * @returns An object containing:
 * - filtered: A list of filtered and sorted cryptocurrencies.
 * - search: The current search query text.
 * - navigation: Navigation prop for navigating to other screens.
 * - loading: A boolean indicating if data is still being fetched.
 * - setSearch: Function to update the search query.
 * - setMinPrice: Function to set the minimum price filter.
 * - setMaxPrice: Function to set the maximum price filter.
 * - setSortBy: Function to set the sorting criterion (price or name).
 */
const useHome = () => {
  const [cryptos, setCryptos] = useState<Crypto[]>([]);
  const [filtered, setFiltered] = useState<Crypto[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [sortBy, setSortBy] = useState<'price' | 'name'>('price');

  const navigation = useNavigation<HomeScreenNavigationProp>();

  // Fetch cryptocurrency data from the API when the component mounts
  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const data = await CryptoService.getCryptos();
        setCryptos(data);
        setFiltered(data);
      } catch (error) {
        console.error('Error fetching cryptos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCryptos();
  }, []);

  // Update the filtered list based on search, price range, and sort criteria
  useEffect(() => {
    let filteredCryptos = cryptos;

    // Filter by search query
    const lower = search.toLowerCase();
    filteredCryptos = filteredCryptos.filter(c =>
      c.name.toLowerCase().includes(lower),
    );

    // Filter by price range
    filteredCryptos = filteredCryptos.filter(
      c => c.priceUsd >= minPrice && c.priceUsd <= maxPrice,
    );

    // Sort the list based on selected criteria (price or name)
    if (sortBy === 'price') {
      filteredCryptos = filteredCryptos.sort((a, b) => a.priceUsd - b.priceUsd);
    } else if (sortBy === 'name') {
      filteredCryptos = filteredCryptos.sort((a, b) =>
        a.name.localeCompare(b.name),
      );
    }

    setFiltered(filteredCryptos);
  }, [search, cryptos, minPrice, maxPrice, sortBy]);

  return {
    filtered,
    search,
    navigation,
    loading,
    setSearch,
    setMinPrice,
    setMaxPrice,
    setSortBy,
  };
};

export default useHome;
