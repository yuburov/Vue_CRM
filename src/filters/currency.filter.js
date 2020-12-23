export default function currencyFilter(value, currency = 'KGS') {
  return new Intl.NumberFormat('ky-KY', {
    style: 'currency',
    currency
  }).format(value)
}
