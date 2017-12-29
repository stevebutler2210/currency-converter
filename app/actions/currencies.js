export const SWAP_CURRENCY = "SWAP_CURRENCY";
export const CHANGE_CURRENCY_AMOUNT = "CHANGE_CURRENCY_AMOUNT";
export const CHANGE_BASE_CURRENCY = "CHANGE_BASE_CURRENCY";
export const CHANGE_QUOTE_CURRENCY = "CHANGE_QUOTE_CURRENCY";
export const GET_INITIAL_CONVERSION = "GET_INITIAL_CONVERSION";

// These actions relate to the fetching of data from the external API
export const CONVERSION_RESULT = "CONVERSION_RESULT";
export const CONVERSION_ERROR = "CONVERSION_ERROR";

export const swapCurrency = () => ({
  type: SWAP_CURRENCY
});

export const changeCurrencyAmount = amount => ({
  type: CHANGE_CURRENCY_AMOUNT,
  amount: parseFloat(amount)
});

export const changeBaseCurrency = currency => ({
  type: CHANGE_BASE_CURRENCY,
  currency: currency
});

export const changeQuoteCurrency = currency => ({
  type: CHANGE_QUOTE_CURRENCY,
  currency: currency
});

export const getInitialConversion = () => ({
  type: GET_INITIAL_CONVERSION
});
