"use client"
import { useState } from "react"
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";

export default function AIGMMachine() {

    return (
                    <div className="machine">
                            <span><h3>GM Quote Generator</h3></span>
                            <div className="recessed-field2">
                                <p id="aiGeneratedText">Your inspirational quote will appear here...</p>
                            </div>
                            <button id="generateTextButton" className="action-button">Generate</button>
                            <button id="copyTextButton" className="action-button">Copy</button>
                    </div>        
    )
}