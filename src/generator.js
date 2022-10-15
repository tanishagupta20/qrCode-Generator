import { useRef } from 'react'
import './generator.css'
import QRCode from 'qrcode'

export default function QRGen() {
    const input = useRef()
    const canvas = useRef()

    function generateCode() {
        QRCode.toCanvas(canvas.current, input.current.value)
    }
    return (
        <>
            <div id="container">
                <div id="input">
                    <input type="url" ref={input} id="website" placeholder="Enter URL" required />
                </div>
                <br></br>
                <br></br>
                <div id="btn">
                    <button id="gen-btn" onClick={generateCode}>Generate QR Code</button>
                </div>
                <br></br>
                <br></br>
                <div id="qrCode">
                    <canvas ref = {canvas} id="canvas"></canvas>
                </div>
            </div>
        </>
    )
}