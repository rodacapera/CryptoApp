import {useState, useEffect} from 'react';
import CryptoService from '../../services/CryptoService';

/**
 * Custom hook that retrieves the icon image URL for a given cryptocurrency based on its name.
 * The hook fetches the image from the CryptoService and sets a fallback image in case of an error.
 *
 * @param {Object} params - The hook parameters.
 * @param {string} params.name - The name of the cryptocurrency for which the icon is being fetched.
 *
 * @returns {Object} - The hook returns an object containing the `imageUrl` state.
 * @returns {string | null} imageUrl - The URL of the cryptocurrency icon or null if not available.
 */
const useIcons = ({name}: {name: string}): {imageUrl: string | null} => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const fallbackIcon = require('../../assets/default_logo.png');

  /**
   * Side effect to fetch the cryptocurrency icon image when the name is provided.
   * If fetching fails, the fallback image is used.
   */
  useEffect(() => {
    if (name) {
      CryptoService.getImageCryptoById(name)
        .then(e => {
          setImageUrl(e); // Update the state with the fetched image URL
        })
        .catch(() => setImageUrl(fallbackIcon)); // Use fallback image if fetch fails
    }
  }, [fallbackIcon, name]);

  return {imageUrl}; // Return the imageUrl state to be used by the component
};

export default useIcons;
