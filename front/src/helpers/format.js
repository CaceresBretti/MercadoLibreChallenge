export const formatPrice = (price) => {
    console.log(price.currency);
    if (!price.currency || price.currency.length === 0) {
        return '$0';
    }
    const formatter = new Intl.NumberFormat('es-cl', {
        style: 'currency',
        currency: price.currency,
        minimumFractionDigits: price.decimals,
        currencyDisplay: 'narrowSymbol',
    });

    return formatter.format(price.amount);

}