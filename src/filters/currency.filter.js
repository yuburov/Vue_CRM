export default function currencyFilter(value, currency = 'KGS') {
  return new Intl.NumberFormat('ky', {
    style: 'currency',
    currency
  }).format(value)
}
