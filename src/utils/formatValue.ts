const formatValue = (value: number): string =>
  // local da moeda (pt-BR)
  Intl.NumberFormat('pt-BR', {
    currency: 'BRL', // qual moeda
    style: 'currency', // formata para o estilo de moeda
  }).format(value);

export default formatValue;
