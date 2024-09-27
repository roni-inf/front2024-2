const pedidos = [
  { numero: 123, status: "enviado", total: 1500 },
  { numero: 113, status: "enviado", total: 2000 },
  { numero: 133, status: "enviado", total: 1800 },
];


const totalGeral = pedidos.reduce((soma, pedido)=> soma + pedido.total,0);

console.log(`Resultado:${totalGeral}`);