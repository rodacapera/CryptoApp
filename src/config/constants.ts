// Configuration object for application-level settings
export const APP_CONFIG = {
  /**
   * The default currency to be used in the application.
   * This is used when displaying prices for cryptocurrencies.
   *
   * @type {string}
   * @default 'USD'
   */
  DEFAULT_CURRENCY: 'USD',

  /**
   * The maximum number of cryptocurrencies to display in the list.
   * This value determines how many cryptocurrencies are fetched or displayed at once.
   *
   * @type {number}
   * @default 100
   */
  MAX_CRYPTO_DISPLAY: 100,
};
