import axios, {AxiosResponse} from 'axios';
import Crypto from '../models/Crypto';
import {API_ROUTES} from '../config/apiRoutes';
import {ApiResponse} from './types/cryptoServiceTypes';
import {Image} from 'react-native';

export default class CryptoService {
  /**
   * Fetches the list of cryptocurrencies from the API and maps them to `Crypto` objects.
   *
   * @returns {Promise<Crypto[]>} A promise that resolves to an array of `Crypto` objects.
   */
  static async getCryptos(): Promise<Crypto[]> {
    const response: AxiosResponse<ApiResponse> = await axios.get(
      API_ROUTES.GET_CRYPTOS,
    );
    return response.data.data.map(item => new Crypto(item));
  }

  /**
   * Fetches details of a cryptocurrency by its ID from the API.
   *
   * @param {string} id - The unique identifier of the cryptocurrency.
   * @returns {Promise<Crypto | null>} A promise that resolves to a `Crypto` object or null if the cryptocurrency is not found.
   */
  static async getCryptoById(id: string): Promise<Crypto | null> {
    const response: AxiosResponse<any> = await axios.get(
      API_ROUTES.GET_CRYPTO_BY_ID(id),
    );
    const data = response.data[0];
    return data ? new Crypto(data) : null;
  }

  /**
   * Fetches the icon URL for a cryptocurrency by its symbol. If the icon is not available, returns a fallback icon.
   *
   * @param {string} symbol - The symbol of the cryptocurrency (e.g., 'btc', 'eth').
   * @returns {Promise<string>} A promise that resolves to the URL of the cryptocurrency's icon, or a fallback icon URL if the image cannot be fetched.
   */
  static async getImageCryptoById(symbol: string): Promise<string> {
    const iconUrl = `https://www.coinlore.com/img/${symbol.toLowerCase()}.png`;
    const fallbackIcon = Image.resolveAssetSource(
      require('../../src/assets/default_logo.png'),
    ).uri;

    try {
      const success = await Image.prefetch(iconUrl);
      return success ? iconUrl : fallbackIcon;
    } catch (error) {
      return fallbackIcon;
    }
  }
}
