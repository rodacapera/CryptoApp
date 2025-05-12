// Base URL for the Coinlore API
const BASE_URL = 'https://api.coinlore.net/api';

// API_ROUTES object defines the available API endpoints for interacting with the Coinlore API.
export const API_ROUTES = {
  /**
   * Endpoint to get a list of cryptocurrencies with a limit of 100 items.
   *
   * @example
   * `${BASE_URL}/tickers/?limit=100`
   *
   * @type {string}
   */
  GET_CRYPTOS: `${BASE_URL}/tickers/?limit=100`,

  /**
   * Endpoint to get detailed information for a specific cryptocurrency by its ID.
   *
   * @param {string} id - The unique identifier for the cryptocurrency.
   * @returns {string} - A string representing the URL for fetching cryptocurrency details.
   *
   * @example
   * `${BASE_URL}/ticker/?id=${id}`
   */
  GET_CRYPTO_BY_ID: (id: string) => `${BASE_URL}/ticker/?id=${id}`,
};
