const rwaPools = [
    '0x80ac24aA929eaF5013f6436cdA2a7ba190f5Cc0b',
    '0x356b8d89c1e1239cbbb9de4815c39a1474d5ba7d'
]

async function tvl(api) {
    const tokens = await api.multiCall({ abi: 'address:asset', calls: rwaPools })
    const bals = await api.multiCall({ abi: 'uint256:totalAssets', calls: rwaPools })
    api.addTokens(tokens, bals)
}

module.exports = {
    doublecounted: true,
    ethereum: { tvl, }
}