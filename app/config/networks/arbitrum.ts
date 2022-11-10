export default {
  ChainId: 42161,
  name: "Arbitrum",
  blockExplorerName: "Arbitrum",
  blockExplorerUrl: "https://arbiscan.io",
  rpcUrls: ["https://arb1.arbitrum.io/rpc", "https://rpc.ankr.com/arbitrum"],
  userExplorerUrl: "https://arbiscan.io/address/",
  secondsPerBlock: 0.2178610783,
  graphUrl: "https://graph.tender.fi/",
  Contracts: {
    Comptroller: "0x49Ea2c991290cA13f57Ae2b8ca98bC6140925db3",
    PriceOracle: "0xfc2e8e087Ce399aA40c868402d8643f3F53b89eA",
  },
  Tokens: {
    ETH: {
      name: "ETH",
      symbol: "ETH",
      decimals: 18,
      address: "",
      icon: "/images/coin-icons/ethereum.svg",
      cToken: {
        name: "tETH",
        symbol: "tETH",
        decimals: 8,
        address: "0x593b3eF799b219d80dD8F0556d1aA8bC362fe48C",
      },
    },
    WBTC: {
      name: "WBTC",
      symbol: "WBTC",
      decimals: 8,
      address: "0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f",
      icon: "/images/coin-icons/bitcoin.svg",
      cToken: {
        name: "tWBTC",
        symbol: "tWBTC",
        decimals: 8,
        address: "0x27cE5A4a632a0A835D7569e1c2aE7B5AA183d6B0",
      },
    },
    USDC: {
      name: "USDC",
      symbol: "USDC",
      decimals: 6,
      address: "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",
      icon: "/images/coin-icons/usdc.svg",
      cToken: {
        name: "tUSDC",
        symbol: "tUSDC",
        decimals: 8,
        address: "0xB1087a450373BB26BCf1A18E788269bde9c8fc85",
      },
    },
    USDT: {
      name: "USDT",
      symbol: "USDT",
      decimals: 6,
      address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
      icon: "/images/coin-icons/usdt.svg",
      cToken: {
        name: "tUSDT",
        symbol: "tUSDT",
        decimals: 8,
        address: "0x102517Ea9340eDd21afdfAA911560311FeEFc607",
      },
    },

DAI: {
      name: "DAI",
      symbol: "DAI",
      decimals: 18,
      address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
      icon: "/images/coin-icons/dai.svg",
      priceDecimals: 18,
      cToken: {
        name: "tDAI",
        symbol: "tDAI",
        decimals: 8,
        address: "0xD0af14CEe85b6612C02F75F35E90fE1f8e0fB2fD",
      },
    },


    FRAX: {
      name: "FRAX",
      symbol: "FRAX",
      decimals: 18,
      address: "0x17FC002b466eEc40DaE837Fc4bE5c67993ddBd6F",
      icon: "/images/coin-icons/frax.svg",
      cToken: {
        name: "tFRAX",
        symbol: "tFRAX",
        decimals: 8,
        address: "0x038A8c9B8f25Fdb6d306FE1F4D99Ad9B3b3Ab722",
      },
    },
    // UNI: {
    //   name: "UNI",
    //   symbol: "UNI",
    //   decimals: 18,
    //   address: "0xFa7F8980b0f1E64A2062791cc3b0871572f1F7f0",
    //   icon: "/images/coin-icons/uni.svg",
    //   cToken: {
    //     name: "tUNI",
    //     symbol: "tUNI",
    //     decimals: 8,
    //     address: "0x75095636CD74FdDA8bC36a2bdC455489C86B30bf",
    //   },
    // },
    // LINK: {
    //   name: "LINK",
    //   symbol: "LINK",
    //   decimals: 18,
    //   address: "0xf97f4df75117a78c1A5a0DBb814Af92458539FB4",
    //   icon: "/images/coin-icons/link.svg",
    //   cToken: {
    //     name: "tLINK",
    //     symbol: "tLINK",
    //     decimals: 8,
    //     address: "0xE30a6c7caBFB3b509EC2e765A70cA399a4d9e2f1",
    //   },
    // },
    GLP: {
      name: "GLP",
      symbol: "GLP",
      decimals: 18,
      // staked glp is for approve
      sGLPAddress: "0x2F546AD4eDD93B956C8999Be404cdCAFde3E89AE",
      // fsGLP has balanceOf
      address: "0x1aDDD80E6039594eE970E5872D247bf0414C8903",
      icon: "/images/coin-icons/glp.svg",
      cToken: {
        name: "tGLP",
        symbol: "tGLP",
        decimals: 8,
        address: "0xa2F156bc04329f9D0C71804a5B56f130674F44c9",
      },
    },
  },
};
