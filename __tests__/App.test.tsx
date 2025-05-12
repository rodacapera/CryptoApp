import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import App from '../App';

jest.mock('../src/services/CryptoService', () => ({
  getCryptos: jest.fn().mockResolvedValue([
    {
      id: '1',
      name: 'Bitcoin',
      symbol: 'BTC',
      getFormattedPrice: () => '$40,000',
    },
    {
      id: '2',
      name: 'Ethereum',
      symbol: 'ETH',
      getFormattedPrice: () => '$2,800',
    },
  ]),
}));

jest.mock('../src/screens/homeScreen/hooks/HomeHook', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    filtered: [],
    search: '',
    loading: false,
    setSearch: jest.fn(),
    navigation: {navigate: jest.fn()},
  })),
}));

jest.mock('../src/screens/detailScreen/hooks/DetailScreenHook', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    crypto: {
      id: '1',
      name: 'Bitcoin',
      symbol: 'BTC',
      getFormattedPrice: () => '42,000',
    },
    loading: false,
  })),
}));

test('App renders correctly with navigation', async () => {
  await ReactTestRenderer.act(() => {
    ReactTestRenderer.create(<App />);
  });
});
