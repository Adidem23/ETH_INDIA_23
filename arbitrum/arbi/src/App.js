import React, { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import abi from './abi/Simple.json';
import './App.css';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';

const App = () => {

  const [Account, setAccount] = useState("");
  const [Number, setNumber] = useState(0);
  const [Clicked, setClicked] = useState(false);


  const ConnectEth = async () => {
    const { ethereum } = window;

    const account = await ethereum.request({
      method: "eth_requestAccounts",
    });

    setAccount(account[0]);

    ethereum.on('accountsChanged', async (accountnew) => {
      setAccount(accountnew[0]);
    })

    setClicked(true);
  }

  const Counter = async () => {

    const providers = new ethers.providers.Web3Provider(window.ethereum);
    const Signers = providers.getSigner();
    const ContactAddress = "0xd60f71fabc744eaacb6d55a88eb2dc7029c7db46";
    const abi1 = abi.abi;

    const contract1 = new ethers.Contract(ContactAddress, abi1, Signers);

    if (Clicked) {
      const number = await contract1.setNUmber(Number + 1);

      const NumberInt = parseInt(number)

      setNumber(NumberInt);
    } else {
      alert("Connect Account!!");
    }

  }

  const getNumber = async () => {
    const providers = new ethers.providers.Web3Provider(window.ethereum);
    const Signers = providers.getSigner();
    const ContactAddress = "0xd60f71fabc744eaacb6d55a88eb2dc7029c7db46";
    const abi1 = abi.abi;

    const contract1 = new ethers.Contract(ContactAddress, abi1, Signers);

    const numbertoget = await contract1.getnumber();

    const NumberInt = parseInt(numbertoget)

    setNumber(NumberInt);
  }

  getNumber();



  return (
    <>

      <div style={{ display: 'block', margin: 'auto', width: 'fit-content', marginTop: '100px' }}>

        <div className="card">
          <div className="title">
            <span>
              <svg width="20" fill="currentColor" height="20" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z">
                </path>
              </svg>
            </span>
            <p className="title-text">
              Number
            </p>
          </div>
          <div className="data">
            <p>
              {Number}
            </p>

          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row' }}>

          <button onClick={ConnectEth}>{Clicked ? <>Connected</> : <>Connect</>}</button>

          <button onClick={Counter}>+</button>

        </div>

        {Clicked && <><div className="card1">
          <div className="card-border-top1">
          </div>
          <div className="img1" style={{ display: 'block', margin: 'auto', width: 'fit-content' }}>
            <Jazzicon diameter={55} seed={jsNumberForAddress(`${Account}`)} />
          </div>
          <span>Connected</span>
        </div></>}

      </div>

    </>
  )
}

export default App