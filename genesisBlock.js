const genesisBlock = {
    index: 0,
    timestamp: new Date().getTime(),
    data: "Our genesis data",
    previousHash: "-1"
};

genesisBlock.hash = createHash(genesisBlock);

addToChain(genesisBlock);