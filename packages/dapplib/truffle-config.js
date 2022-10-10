require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan remember mad pudding hover praise army gesture'; 
let testAccounts = [
"0xc997cc429603cfa3f2a8a0c2a43a51c5f640d09db465f169fd03fbfc21f1acc0",
"0x137d87e6bd7ba55b6eb17b617a0d92c7c7daec28c2adfce5e1d067e025ce6e57",
"0x82fb5fe574c1775e33d45d802dd418fb7243b095f0df2f4c6105a18c2b86e7a6",
"0xc6043984e66fedb611d9a8a230179665266cb9109ca551bffb17ec34b2863c38",
"0x521c287d73e3657620d66a08a62de668d6f8e840f4cc998588f80a55649c1975",
"0xcb914bb204a16cce54daa3b2c4fd90b24c96c9e3f4971c58a3a3b6ce8a9d77a8",
"0x847cefe2b51713bab1ef5c9d110df26a05cc242561b90a6dc3ebcb61922ed9f2",
"0x1d890dfad2a630f1b3f4187f14a2ef4043a20e53c0135c0dc2086bbb0da11713",
"0x383f62bef9e490a61f280ce0e0c35bbcbeab83470b6bbd4953119b59b8cb2e93",
"0x63ac9e4b2229df64654d0a31dd9d6535f3d7d7c452e39bf9f2b13046e8b72b2e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

