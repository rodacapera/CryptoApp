// src/models/Crypto.ts
import {Crypto as CryptoType} from './types/cryptoTypes';

/**
 * Class representing a Cryptocurrency.
 * This class implements the CryptoType interface and contains all properties and methods
 * related to a cryptocurrency entity.
 */
export default class Crypto implements CryptoType {
  id: string;
  name: string;
  symbol: string;
  priceUsd: number;
  csupply: string;
  market_cap_usd: string;
  msupply: string;
  nameid: string;
  percent_change_1h: string;
  percent_change_7d: string;
  percent_change_24h: string;
  price_btc: string;
  price_usd: string;
  rank: number;
  tsupply: string;
  volume24: number;
  volume24a: number;

  /**
   * Creates an instance of the Crypto class.
   *
   * @param {any} data - The data object that contains the cryptocurrency's properties.
   * @param {string} data.id - Unique identifier for the cryptocurrency.
   * @param {string} data.name - The name of the cryptocurrency.
   * @param {string} data.symbol - The symbol representing the cryptocurrency.
   * @param {string} data.price_usd - The price of the cryptocurrency in USD.
   * @param {string} data.csupply - The circulating supply of the cryptocurrency.
   * @param {string} data.market_cap_usd - The market capitalization of the cryptocurrency in USD.
   * @param {string} data.msupply - The maximum supply of the cryptocurrency.
   * @param {string} data.nameid - The internal name identifier for the cryptocurrency.
   * @param {string} data.percent_change_1h - The percentage change in price over the last hour.
   * @param {string} data.percent_change_7d - The percentage change in price over the last 7 days.
   * @param {string} data.percent_change_24h - The percentage change in price over the last 24 hours.
   * @param {string} data.price_btc - The price of the cryptocurrency in BTC.
   * @param {number} data.rank - The rank of the cryptocurrency in terms of market cap.
   * @param {string} data.tsupply - The total supply of the cryptocurrency.
   * @param {number} data.volume24 - The 24-hour trading volume of the cryptocurrency.
   * @param {number} data.volume24a - The adjusted 24-hour trading volume.
   */
  constructor(data: any) {
    this.id = data.id;
    this.name = data.name;
    this.symbol = data.symbol;
    this.priceUsd = parseFloat(data.price_usd);
    this.csupply = data.csupply;
    this.market_cap_usd = data.market_cap_usd;
    this.msupply = data.msupply;
    this.nameid = data.nameid;
    this.percent_change_1h = data.percent_change_1h;
    this.percent_change_7d = data.percent_change_7d;
    this.percent_change_24h = data.percent_change_24h;
    this.price_btc = data.price_btc;
    this.price_usd = data.price_usd;
    this.rank = data.rank;
    this.symbol = data.symbol;
    this.tsupply = data.tsupply;
    this.volume24 = data.volume24;
    this.volume24a = data.volume24a;
  }

  /**
   * Returns the formatted price of the cryptocurrency in USD.
   *
   * @returns {string} - The formatted price of the cryptocurrency in USD (e.g., '$123.45').
   */
  getFormattedPrice(): string {
    return `$${this.priceUsd.toFixed(2)}`;
  }
}
