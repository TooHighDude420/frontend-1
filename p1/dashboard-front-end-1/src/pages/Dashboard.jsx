import Card from "../components/Card"
import { Link } from "react-router-dom"
import CryptoContent from "../components/CryptoContent"
import BallanceContent from "../components/BallanceContent"
import WalletContent from "../components/WalletContent"
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import { useState, useEffect } from "react"

const mockData = [
  {
    time: "00:00",
    bitcoin: 20012.34,
    eutherium: 20012.34,
    tether: 20012.34
  },
  {
    time: "01:00",
    bitcoin: 20145.12,
    eutherium: 20145.12,
    tether: 20145.12
  },
  {
    time: "02:00",
    bitcoin: 20012.34,
    eutherium: 20012.34,
    tether: 20012.34
  },
  {
    time: "03:00",
    bitcoin: 20145.12,
    eutherium: 20145.12,
    tether: 20145.12
  },
  {
    time: "04:00",
    bitcoin: 20012.34,
    eutherium: 20012.34,
    tether: 20012.34
  },
  {
    time: "05:00",
    bitcoin: 20145.12,
    eutherium: 20145.12,
    tether: 20145.12
  },
  {
    time: "06:00",
    bitcoin: 20012.34,
    eutherium: 20012.34,
    tether: 20012.34
  },
  {
    time: "07:00",
    bitcoin: 20145.12,
    eutherium: 20145.12,
    tether: 20145.12
  },
  {
    time: "08:00",
    bitcoin: 20012.34,
    eutherium: 20012.34,
    tether: 20012.34
  },
  {
    time: "09:00",
    bitcoin: 20145.12,
    eutherium: 20145.12,
    tether: 20145.12
  },
  {
    time: "10:00",
    bitcoin: 20012.34,
    eutherium: 20012.34,
    tether: 20012.34
  },
  {
    time: "11:00",
    bitcoin: 20145.12,
    eutherium: 20145.12,
    tether: 20145.12
  },
  {
    time: "12:00",
    bitcoin: 20012.34,
    eutherium: 20012.34,
    tether: 20012.34
  },
  {
    time: "13:00",
    bitcoin: 20145.12,
    eutherium: 20145.12,
    tether: 20145.12
  },
  {
    time: "14:00",
    bitcoin: 20012.34,
    eutherium: 20012.34,
    tether: 20012.34
  },
  {
    time: "15:00",
    bitcoin: 20145.12,
    eutherium: 20145.12,
    tether: 20145.12
  },
  {
    time: "16:00",
    bitcoin: 20145.12,
    eutherium: 20145.12,
    tether: 20145.12
  },
  {
    time: "17:00",
    bitcoin: 20012.34,
    eutherium: 20012.34,
    tether: 20012.34
  },
  {
    time: "18:00",
    bitcoin: 20145.12,
    eutherium: 20145.12,
    tether: 20145.12
  },
  {
    time: "19:00",
    bitcoin: 20012.34,
    eutherium: 20012.34,
    tether: 20012.34
  },
  {
    time: "20:00",
    bitcoin: 20145.12,
    eutherium: 20145.12,
    tether: 20145.12
  },
  {
    time: "21:00",
    bitcoin: 20012.34,
    eutherium: 20012.34,
    tether: 20012.34
  },
  {
    time: "22:00",
    bitcoin: 20145.12,
    eutherium: 20145.12,
    tether: 20145.12
  },
  {
    time: "23:00",
    bitcoin: 20012.34,
    eutherium: 20012.34,
    tether: 20012.34
  },
];

function Dashboard({ favorites, wallet }) {
  const [loadedCoins, setLoadedCoins] = useState([]);
  const [combData, setCombData] = useState([]);

  //value is time, price
  useEffect(() => {
    let combineddata = [];
    let dataTopThree = [];

    loadedCoins.forEach(coin => {
      for (let i = 0; i < coin.value.length; i++) {
        combineddata.push({
          time: coin["value"][i]["time"],
          name: coin["name"],
          value: coin["value"][i]["price"]
        });
      }
    });

    let tmp;

    combineddata.forEach((datePrice) => {
      if (dataTopThree.length == 0) {
        tmp = {
          time: datePrice.time,
          "coin1": datePrice.value
        };

        dataTopThree.push(tmp);
      } else {
        let found = false;

        dataTopThree.forEach(element => {
          if (element.time == datePrice.time) {
            found = true;
            if (element.coin1 != null && element.coin2 == null) {
              element["coin2"] = datePrice.value;
            } else if (element.coin1 != null && element.coin2 != null) {
              element["coin3"] = datePrice.value;
            }
          }
        });

        if (found == false) {
          tmp = {
            time: datePrice.time,
            "coin1": datePrice.value
          };

          dataTopThree.push(tmp);
        } else {
          found = false;
        }
      }
    });

    setCombData(dataTopThree);
  }, [loadedCoins]);

  return (
    <div className="max-w-[85vw] min-w-[85vw] h-[90vh]">
      {/* ballance and wallet */}
      <div className="flex w-full h-[20vh] justify-center items-center">
        <Card width="min-w-[45%]" height="min-h-full">
          <BallanceContent wallet={wallet} />
        </Card>
        <Card width="min-w-[45%]" height="min-h-full">
          <WalletContent wallet={wallet} />
        </Card>
      </div>
      {/* market previeuw */}
      <div className="text-white">
        <div className="flex w-full justify-end items-center h-[5vh]">
          <Link to="/Market">
            See more &gt;
          </Link>
        </div>
        <div className="flex overflow-x-scroll no-scrollbar">
          <Card width="min-w-[33vw]" height="min-h-[20vh]">
            <CryptoContent coinName="bitcoin" time={5} setLoadedCoins={setLoadedCoins} />
          </Card>
          <Card width="min-w-[33vw]" height="min-h-[20vh]">
            <CryptoContent coinName="ethereum" time={5} setLoadedCoins={setLoadedCoins} />
          </Card>
          <Card width="min-w-[33vw]" height="min-h-[20vh]">
            <CryptoContent coinName="tether" time={5} setLoadedCoins={setLoadedCoins} />
          </Card>
          <Card width="min-w-[33vw]" height="min-h-[20vh]">
            <CryptoContent coinName="binancecoin" time={5} setLoadedCoins={setLoadedCoins} />
          </Card>
          <Card width="min-w-[33vw]" height="min-h-[20vh]">
            <CryptoContent coinName="usd-coin" time={5} setLoadedCoins={setLoadedCoins} />
          </Card>
          <Card width="min-w-[33vw]" height="min-h-[20vh]">
            <CryptoContent coinName="ripple" time={5} setLoadedCoins={setLoadedCoins} />
          </Card>
          <Card width="min-w-[33vw]" height="min-h-[20vh]">
            <CryptoContent coinName="cardano" time={5} setLoadedCoins={setLoadedCoins} />
          </Card>
        </div>
      </div>
      {/* three most held coins on one graph */}
      <div className="w-full h-[30vh]">
        <LineChart width="100%" height="100%" data={combData}>
          <Tooltip />
          <XAxis dataKey="time" />
          <YAxis />
          <Line type="monotone" dataKey="coin1" stroke="#8884d8" dot={null} />
          <Line type="monotone" dataKey="coin2" stroke="#8884d8" dot={null} />
          <Line type="monotone" dataKey="coin3" stroke="#8884d8" dot={null} />
        </LineChart>
      </div>
    </div>
  )
}

export default Dashboard