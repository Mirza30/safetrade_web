export default {
  data: {
    // src: [
    // 	{btc: 'https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png'},
    //   {eth: 'https://kryptowaehrung-info.de/wp-content/uploads/2017/09/a2bcf4f8-9a5d-4f85-873b-cf94ce537eb0.png'},
    //   {xrp: 'https://cryptoslate.com/wp-content/uploads/2017/09/xrp-logo.jpg'},
    //   {ltc: 'https://cdn.worldvectorlogo.com/logos/litecoin.svg'},
    //   {bch: 'https://forkdrop.io/images/forks/bitcoin-cash-200x200.png'},
    //   {eos: 'https://cdn.freebiesupply.com/logos/large/2x/eos-3-logo-png-transparent.png'},
    //   {bnb: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEDrmOrbx99kRETBCF_qbFdby1Cn0unh6XFZIxD3e-XY8qnfpD'},
    //   {usdt: 'https://seeklogo.com/images/T/tether-usdt-logo-FA55C7F397-seeklogo.com.png'},
    //   {bsv: 'data:image/png;base64,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'},
    //   {trx: 'https://cdn.worldvectorlogo.com/logos/tron.svg}'
    // ]
  },
}