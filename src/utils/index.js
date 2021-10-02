export const CurrencyFormat = (value, decimals=2) => {
    if (!value) return '$ 0';
    const val = parseFloat(value);
    return '$ ' + val.toFixed(decimals).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}
