const express = require('express');
const path = require('path');
const https = require('https');
const Web3 = require('web3');
const web3 = new Web3('https://bsc-dataseed1.binance.org:443');
const fs = require('fs');
const app = express();

const port = process.env.PORT || 5000;

pancakesawpPairJsonInterface = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]

madhouseTokenJsonInterface = [{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	}, {
		"anonymous": false,
		"inputs": [{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}, {
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}, {
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	}, {
		"anonymous": false,
		"inputs": [{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			}, {
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	}, {
		"anonymous": false,
		"inputs": [{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			}, {
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			}, {
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	}, {
		"inputs": [{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "_addressFees",
		"outputs": [{
				"internalType": "bool",
				"name": "enable",
				"type": "bool"
			}, {
				"internalType": "uint256",
				"name": "_taxFee",
				"type": "uint256"
			}, {
				"internalType": "uint256",
				"name": "_liquidityFee",
				"type": "uint256"
			}, {
				"internalType": "uint256",
				"name": "_buyTaxFee",
				"type": "uint256"
			}, {
				"internalType": "uint256",
				"name": "_buyLiquidityFee",
				"type": "uint256"
			}, {
				"internalType": "uint256",
				"name": "_sellTaxFee",
				"type": "uint256"
			}, {
				"internalType": "uint256",
				"name": "_sellLiquidityFee",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}, {
		"inputs": [],
		"name": "_buyLiquidityFee",
		"outputs": [{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}, {
		"inputs": [],
		"name": "_buyTaxFee",
		"outputs": [{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}, {
		"inputs": [],
		"name": "_liquidityFee",
		"outputs": [{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}, {
		"inputs": [],
		"name": "_maxTxAmount",
		"outputs": [{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}, {
		"inputs": [],
		"name": "_sellLiquidityFee",
		"outputs": [{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}, {
		"inputs": [],
		"name": "_sellTaxFee",
		"outputs": [{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}, {
		"inputs": [],
		"name": "_taxFee",
		"outputs": [{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}, {
		"inputs": [],
		"name": "afterPreSale",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"inputs": [{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}, {
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}, {
		"inputs": [{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}, {
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"inputs": [{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}, {
		"inputs": [{
				"internalType": "address",
				"name": "_router",
				"type": "address"
			}
		],
		"name": "changeRouterVersion",
		"outputs": [{
				"internalType": "address",
				"name": "_pair",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"inputs": [],
		"name": "deadAddress",
		"outputs": [{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}, {
		"inputs": [],
		"name": "decimals",
		"outputs": [{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}, {
		"inputs": [{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}, {
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"inputs": [{
				"internalType": "uint256",
				"name": "tAmount",
				"type": "uint256"
			}
		],
		"name": "deliver",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"inputs": [{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "excludeFromFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"inputs": [{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "excludeFromReward",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"inputs": [],
		"name": "getTime",
		"outputs": [{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}, {
		"inputs": [],
		"name": "getUnlockTime",
		"outputs": [{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}, {
		"inputs": [{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "includeInFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"inputs": [{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "includeInReward",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"inputs": [{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}, {
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"inputs": [{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "isExcludedFromFee",
		"outputs": [{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}, {
		"inputs": [{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "isExcludedFromReward",
		"outputs": [{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}, {
		"inputs": [{
				"internalType": "uint256",
				"name": "time",
				"type": "uint256"
			}
		],
		"name": "lock",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"inputs": [],
		"name": "name",
		"outputs": [{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}, {
		"inputs": [],
		"name": "owner",
		"outputs": [{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}, {
		"inputs": [],
		"name": "prepareForPreSale",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"inputs": [{
				"internalType": "uint256",
				"name": "tAmount",
				"type": "uint256"
			}, {
				"internalType": "bool",
				"name": "deductTransferFee",
				"type": "bool"
			}
		],
		"name": "reflectionFromToken",
		"outputs": [{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}, {
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"inputs": [{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}, {
				"internalType": "bool",
				"name": "_enable",
				"type": "bool"
			}, {
				"internalType": "uint256",
				"name": "_addressTaxFee",
				"type": "uint256"
			}, {
				"internalType": "uint256",
				"name": "_addressLiquidityFee",
				"type": "uint256"
			}
		],
		"name": "setAddressFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"inputs": [{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}, {
				"internalType": "bool",
				"name": "_enable",
				"type": "bool"
			}, {
				"internalType": "uint256",
				"name": "_addressTaxFee",
				"type": "uint256"
			}, {
				"internalType": "uint256",
				"name": "_addressLiquidityFee",
				"type": "uint256"
			}
		],
		"name": "setBuyAddressFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"inputs": [{
				"internalType": "uint256",
				"name": "buyTaxFee",
				"type": "uint256"
			}, {
				"internalType": "uint256",
				"name": "buyLiquidityFee",
				"type": "uint256"
			}
		],
		"name": "setBuyFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"inputs": [{
				"internalType": "uint256",
				"name": "liquidityFee",
				"type": "uint256"
			}
		],
		"name": "setLiquidityFeePercent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"inputs": [{
				"internalType": "uint256",
				"name": "maxTxAmount",
				"type": "uint256"
			}
		],
		"name": "setMaxTxAmount",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"inputs": [{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}, {
				"internalType": "bool",
				"name": "_enable",
				"type": "bool"
			}, {
				"internalType": "uint256",
				"name": "_addressTaxFee",
				"type": "uint256"
			}, {
				"internalType": "uint256",
				"name": "_addressLiquidityFee",
				"type": "uint256"
			}
		],
		"name": "setSellAddressFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"inputs": [{
				"internalType": "uint256",
				"name": "sellTaxFee",
				"type": "uint256"
			}, {
				"internalType": "uint256",
				"name": "sellLiquidityFee",
				"type": "uint256"
			}
		],
		"name": "setSellFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"inputs": [{
				"internalType": "uint256",
				"name": "taxFee",
				"type": "uint256"
			}
		],
		"name": "setTaxFeePercent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"inputs": [],
		"name": "symbol",
		"outputs": [{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}, {
		"inputs": [{
				"internalType": "uint256",
				"name": "rAmount",
				"type": "uint256"
			}
		],
		"name": "tokenFromReflection",
		"outputs": [{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}, {
		"inputs": [],
		"name": "totalFees",
		"outputs": [{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}, {
		"inputs": [],
		"name": "totalSupply",
		"outputs": [{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}, {
		"inputs": [{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			}, {
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"inputs": [{
				"internalType": "address",
				"name": "_token",
				"type": "address"
			}, {
				"internalType": "address",
				"name": "_to",
				"type": "address"
			}
		],
		"name": "transferForeignToken",
		"outputs": [{
				"internalType": "bool",
				"name": "_sent",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"inputs": [{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}, {
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			}, {
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"inputs": [{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"inputs": [],
		"name": "uniswapV2Pair",
		"outputs": [{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}, {
		"inputs": [],
		"name": "uniswapV2Router",
		"outputs": [{
				"internalType": "contract IUniswapV2Router02",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}, {
		"inputs": [],
		"name": "unlock",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}, {
		"stateMutability": "payable",
		"type": "receive"
	}
]

class Token {
  constructor(abi,address){
    this.address = address; //TODO: should check that the address is valid here
    this.abi = abi; //TODO: should check that the abi is valid here
    this.contract =  new web3.eth.Contract(this.abi,this.address);
  }
  init(){
      var promises = [];
      promises.push(this.contract.methods.name().call().then((result)=> {
        this.name = result;
      }));
      promises.push(this.contract.methods.symbol().call().then((result)=> {
        this.symbol = result;
      }));
      promises.push(this.contract.methods.decimals().call().then((result)=> {
        this.decimals = result;
      }));
      promises.push(this.contract.methods.totalSupply().call().then((result)=> {
        this.totalSupply = result;
      }));
      return promises;
  }
  getReserves(){
    return this.contract.methods.getReserves().call();
  }
  deadBalance(){
    return this.contract.methods.balanceOf('0x000000000000000000000000000000000000dead').call();
  }
}

const madhouseToken = new Token(madhouseTokenJsonInterface,'0x8c4885867d30f03ad04388cee01c65d11d192e61');
const madhousePair = new Token(pancakesawpPairJsonInterface,'0x5d8597a0e54466340985624a407c6ae2b4b5fac2');
const busdPair = new Token(pancakesawpPairJsonInterface,'0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16');

// Initialize token data
const token_data = {
  price: 0,
  circulating_supply: 0,
  total_supply: 0,
  market_cap: 0
}

// SSL Certificate
const options = process.env.DEV ? {} : {
  key: fs.readFileSync(__dirname + '/private.key', 'utf8'),
  cert: fs.readFileSync(__dirname + '/public.cert', 'utf8')
};

// Fetch token data
setInterval(async () => {
  try {
    Promise.all(madhouseToken.init()).then( async ()=>{
      const deadBalance = (await madhouseToken.deadBalance())/(10 ** madhouseToken.decimals);
      const supply = madhouseToken.totalSupply/(10 ** madhouseToken.decimals);
      Promise.all([busdPair.init(),madhousePair.init()]).then(()=>{
        Promise.all([busdPair.getReserves(),madhousePair.getReserves(),madhouseToken.deadBalance()]).then((result)=>{
          wbnbPerBusd = result[0]._reserve1/result[0]._reserve0
          const price = result[1]._reserve1/result[1]._reserve0*wbnbPerBusd/(10**(18-madhouseToken.decimals));
          const circulating_supply = (madhouseToken.totalSupply-result[2])/(10 ** madhouseToken.decimals);
          const market_cap = supply * price;

          token_data.price = price.toFixed(8).toString();
          token_data.circulating_supply = Math.round(supply).toLocaleString();
          token_data.total_supply = Math.round(supply - deadBalance).toLocaleString();
          token_data.market_cap = Math.round(circulating_supply * price).toLocaleString();
        });
      });
    });

    // Set values
    console.table(token_data)
  } catch (e) {
    console.error(e);
  }
}, 1000);

// Routing and middleware
app.use(express.static(path.join(__dirname, 'build')));

app.get('/api', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send(token_data);
});

app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


// Start setver
https.createServer(options, app).listen(port);
