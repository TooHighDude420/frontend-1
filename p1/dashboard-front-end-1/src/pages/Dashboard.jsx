import Card from "../components/Card"
import { Link } from "react-router-dom"
import CryptoContent from "../components/CryptoContent"
import BallanceContent from "../components/BallanceContent"
import WalletContent from "../components/WalletContent"
import registry from "../singleton";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import { useState, useEffect } from "react"
import Skeleton from "react-loading-skeleton"

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

function say(content) {
  console.log(content);
}

function Dashboard({ favorites, wallet, cache, loading, setFavorites }) {
  const [context, setContext] = useState({})

  useEffect(() => {
    if (!cache) return;

    const topthree = [];
    let combData = [];
    let keyone = "";
    let keytwo = "";
    let keythee = "";
    let timelist = [];

    for (let thing of Object.keys(wallet)) {
      if (topthree.length < 3) {
        if (thing === "ballance") {

        } else {
          topthree.push({
            "name": thing,
            "value": cache.get(thing)
          });

          for (let obj of cache.get(thing)) {
            timelist.push(obj.time);
          }
        }
      }
    }

    timelist = new Set(timelist);

    keyone = topthree[0].name
    keytwo = topthree[1].name
    keythee = topthree[2].name

    for (let timestamp of timelist) {
      let tmpbundle = [];

      topthree.forEach((element) => {
        element.value.forEach(elm => {
          if (elm.time == timestamp) {
            tmpbundle.push({ "name": element.name, "value": elm.price })
          }
        });
      });

      let tmpdata = {
        "time": timestamp,
        [keyone]: tmpbundle[0].value,
        [keytwo]: tmpbundle[1].value,
        [keythee]: tmpbundle[2].value
      }
      combData.push(tmpdata)
    }

    setContext({
      combData,
      keyone,
      keytwo,
      keythee
    });
  }, [cache]);

  let combData = context.combData;
  let keyone = context.keyone;
  let keytwo = context.keytwo;
  let keythee = context.keythee;

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
          {loading
            ? <Card width="min-w-[33vw]" height="min-h-[20vh]">
              <Skeleton count={1} width="33vw" height="20vh" />
            </Card>
            : <Card width="min-w-[33vw]" height="min-h-[20vh]">
              <Link to="/Detail/Bitcoin">
                <CryptoContent coinName="bitcoin" cache={cache} setFavorites={setFavorites} />
              </Link>
              <button onClick={registry.getInstance("favorites").addToFavorites("template")}>
                <p>Favorite</p>
              </button>
              <button onClick={console.log(registry.getInstance("favorites").getAllFavorites())}>
                <p>Favorite</p>
              </button>
            </Card>
          }
          {loading
            ? <Card width="min-w-[33vw]" height="min-h-[20vh]">
              <Skeleton count={1} width="33vw" height="20vh" />
            </Card>
            : <Card width="min-w-[33vw]" height="min-h-[20vh]">
              <Link to="/Detail/ethereum">
                <CryptoContent coinName="ethereum" cache={cache} setFavorites={setFavorites} />
              </Link>
            </Card>
          }
          {loading
            ? <Card width="min-w-[33vw]" height="min-h-[20vh]">
              <Skeleton count={1} width="33vw" height="20vh" />
            </Card>
            : <Card width="min-w-[33vw]" height="min-h-[20vh]">
              <CryptoContent coinName="tether" cache={cache} />
            </Card>
          }
          {loading
            ? <Card width="min-w-[33vw]" height="min-h-[20vh]">
              <Skeleton count={1} width="33vw" height="20vh" />
            </Card>
            : <Card width="min-w-[33vw]" height="min-h-[20vh]">
              <CryptoContent coinName="binancecoin" cache={cache} />
            </Card>
          }
          {loading
            ? <Card width="min-w-[33vw]" height="min-h-[20vh]">
              <Skeleton count={1} width="33vw" height="20vh" />
            </Card>
            : <Card width="min-w-[33vw]" height="min-h-[20vh]">
              <CryptoContent coinName="usd-coin" cache={cache} />
            </Card>
          }
          {loading
            ? <Card width="min-w-[33vw]" height="min-h-[20vh]">
              <Skeleton count={1} width="33vw" height="20vh" />
            </Card>
            : <Card width="min-w-[33vw]" height="min-h-[20vh]">
              <CryptoContent coinName="ripple" cache={cache} />
            </Card>
          }
          {loading
            ? <Card width="min-w-[33vw]" height="min-h-[20vh]">
              <Skeleton count={1} width="33vw" height="20vh" />
            </Card>
            : <Card width="min-w-[33vw]" height="min-h-[20vh]">
              <CryptoContent coinName="cardano" cache={cache} />
            </Card>
          }
        </div>
      </div>
      {/* three most held coins on one graph */}
      <div className="w-full h-[30vh]">
        <LineChart width="100%" height="100%" data={combData}>
          <Tooltip />
          <XAxis dataKey="time" />
          <YAxis />
          <Line type="monotone" dataKey={keyone} stroke="#8884d8" dot={null} />
          <Line type="monotone" dataKey={keytwo} stroke="#8884d8" dot={null} />
          <Line type="monotone" dataKey={keythee} stroke="#8884d8" dot={null} />
        </LineChart>
      </div>
    </div>
  )
}

export default Dashboard