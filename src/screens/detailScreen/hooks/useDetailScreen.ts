import {useState, useEffect} from 'react';
import Crypto from '../../../models/Crypto';
import CryptoService from '../../../services/CryptoService';
import {
  DetailScreenProps,
  UseDetailRequestProps,
} from '../types/detailScreenTypes';

/**
 * Custom hook for managing the state and logic of the DetailScreen.
 * It fetches the cryptocurrency details based on the provided ID and manages
 * the loading state.
 *
 * It returns the fetched cryptocurrency details and a loading state.
 *
 * @param {DetailScreenProps} props - Contains the ID of the cryptocurrency to fetch.
 * @returns {Object} An object containing:
 * - crypto: The cryptocurrency details if fetched successfully, or null if there's an error or no data.
 * - loading: A boolean indicating if the data is still being fetched.
 */
const useDetailScreen = ({id}: DetailScreenProps): UseDetailRequestProps => {
  const [crypto, setCrypto] = useState<Crypto | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch cryptocurrency details based on the ID when the component mounts or the ID changes
  useEffect(() => {
    const fetchCrypto = async () => {
      try {
        const fetchedCrypto = await CryptoService.getCryptoById(id);
        setCrypto(fetchedCrypto);
      } catch (error) {
        console.error('Error fetching crypto:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCrypto();
  }, [id]);

  return {
    crypto,
    loading,
  };
};

export default useDetailScreen;
