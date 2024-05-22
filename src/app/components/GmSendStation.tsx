"use client"
import { useState } from "react"
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";

export default function GmSendStation() {
    const [gmQuantity, setGMQuantity] = useState(1)

    const incQty = async () => {
        setGMQuantity(gmQuantity + 1)
    }

    const decQty = () => {
        if (gmQuantity > 1)
            setGMQuantity(gmQuantity - 1)
    }

    return (
        <section className="gm-send">
            <h1>GM Send Station </h1>

            <div className="gm-send-container">
                <div className="gm-send-box">
                    <h3>GMs In My Wallet</h3>
                    <div className="recessed-field">
                        <h3>5</h3>
                    </div>
                </div>

                <div className="gm-send-box">
                    <h3>Send To Address</h3>
                    <div className="recessed-field">
                        <h4>0xD00530a4530471B11f0337C8138ECA5Ef5e2ed48</h4>
                    </div>
                </div>
               
            </div>

            <div className="mint-options">
                <button onClick={decQty} id="decreaseQuantity" className="quantity-adjust">-</button>
                <input type="number" id="nftQuantity" className="nft-quantity-input" value={gmQuantity} onChange={() => setGMQuantity} min="1" />
                <button onClick={incQty} id="increaseQuantity" className="quantity-adjust">+</button>
            </div>

            <div className="send-button-container">
                <button id="stakeButton" className="action-button">Send GMs</button>
            </div>
            
          
        </section>
    )
}
