import { useState } from "react";
import './Data.css';
function Data() {
    let [type, setType] = useState("");
    let [number, setNumber] = useState("");
    let [expiration, setExpiration] = useState("");
    let [owner, setOwner] = useState("");
    let [infos, setInfos] = useState(null);
    let [showinfo, setshowInfo] = useState(false);
    async function getDetails() {
        try {
            let response = await fetch("https://fakerapi.it/api/v1/credit_cards?_quantity=9")
            let info = await response.json();
            const details = info.data[0];
            setType(details.type);
            setNumber(details.number);
            setExpiration(details.expiration);
            setOwner(details.owner);
            setInfos(details);
            setshowInfo(false);


        } catch (error) {
            console.log("Error is occured", error);
        }

    }

    function printDetails() {
        setshowInfo(true);
        setType("");
        setNumber("");
        setExpiration("");
        setOwner("");

    }


    return (

        <div className="container">
            <h2>Get Random Data...</h2>
            <input type="text" placeholder="Type..." value={type} onChange={(event) => setType(event.target.value)} ></input>
            <input type="text" placeholder="ATM No..." value={number} onChange={(event) => setNumber(event.target.value)} ></input>
            <input type="text" placeholder="Expiry Date..." value={expiration} onChange={(event) => setExpiration(event.target.value)}></input>
            <input type="text" placeholder="Owner.." value={owner} onChange={(event) => setOwner(event.target.value)}></input>
            <button onClick={getDetails}>Get the details</button>
            <button onClick={printDetails} >Print the details</button>
            {showinfo && infos && <div className="print">
                <p>Type: {infos.type}</p>
                <p>Account Number: {infos.number}</p>
                <p>Expiration: {infos.expiration}</p>
                <p>Owner: {infos.owner}</p>
            </div>}

        </div>
    );
}
export default Data;