const { getTvl } = require('./tvl');

const pool = {
  classic: "terra1vz6d0lzfak0ef42hfm38erctztymcrsj5kww0v4z8rsaqvwgezwqy3u4xx", // Pool SON/LUNC
};

module.exports = {
  timetravel: false,
  misrepresentedTokens: true,
  methodology: "SON Liquidity on the DEX",
  terra: { tvl: getTvl(pool.classic) },
};
