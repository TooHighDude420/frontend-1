import axios from 'axios'

const choiseList = [
    "bitcoin",
    "ethereum",
    "tether",
    "binancecoin",
    "usd-coin",
    "ripple",
    "cardano",
    "dogecoin",
    "matic-network",
    "solana",
    "litecoin",
    "polkadot",
    "tron",
    "shiba-inu",
    "avalanche-2",
    "dai",
    "uniswap",
    "chainlink",
    "stellar",
    "vechain"
];

const mockData = [
    { time: "00:00", price: 20012.34 },
    { time: "01:00", price: 20145.12 },
    { time: "02:00", price: 19987.56 },
    { time: "03:00", price: 23.78 },
    { time: "04:00", price: 200055.90 },
    { time: "05:00", price: 20010.45 },
    { time: "06:00", price: 20077.32 },
    { time: "07:00", price: 20098.21 },
    { time: "08:00", price: 20123.54 },
    { time: "09:00", price: 20087.12 },
    { time: "10:00", price: 20110.45 },
    { time: "11:00", price: 20095.67 },
    { time: "12:00", price: 20120.89 },
    { time: "13:00", price: 20088.34 },
    { time: "14:00", price: 20115.21 },
    { time: "15:00", price: 20140.78 },
    { time: "16:00", price: 20105.12 },
    { time: "17:00", price: 20125.45 },
    { time: "18:00", price: 20150.67 },
    { time: "19:00", price: 20122.34 },
    { time: "20:00", price: 20148.56 },
    { time: "21:00", price: 20170.12 },
    { time: "22:00", price: 20155.78 },
    { time: "23:00", price: 20180.45 },
];

async function getCoinData(Coin) {
    await new Promise(res => setTimeout(res, 1000));

    const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${Coin}/market_chart?vs_currency=usd&days=5`
    );

    let formatted = data.prices.map(([time, price]) => ({
        name: Coin,
        time: new Date(new Date(time).setMinutes(0,0,0)).toLocaleString(),
        price,
    }));

    console.log(formatted);

    return formatted
}

async function fillCashe() {
    let tmpreslist = [];

    for (const Coin of choiseList) {
        await getCoinData(Coin).then((formatted) => {
            tmpreslist.push(...formatted);
        }).catch(() => {
            console.log(`${Coin} could not be fetched`);
            mockData.forEach(mock => {
                tmpreslist.push({
                    "name": Coin,
                    "time": mock.time,
                    "price": mock.price
                });
            });
        });
    }

    return tmpreslist;
}

async function finalMap() {
    let lastlist = await fillCashe();
    let casheMap = new Map();

    lastlist.forEach(test => {
        if (casheMap.has(test.name) === false) {
            casheMap.set(test.name, [{ "price": test.price, "time": test.time }]);
        } else {
            casheMap.get(test.name).push({ "price": test.price, "time": test.time });
        }
    });

    console.log("cashemap", casheMap);

    return casheMap;
}

export default finalMap()