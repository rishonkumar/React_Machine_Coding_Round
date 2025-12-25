import { useState } from 'react'
import '../App.css'

export default function ToastContainer() {
    const [show, setShow] = useState()

    const handleClose = () => {
        setShow(false)
    }

    const handleAdd = () => {
        setShow(true)

        //after 5 seconds close the toast
        setTimeout(handleClose, 5000)
    }

    return (
        <div className="containter">
            <div className="toast-container">
                {show && <div className="toast">
                    Sucess toast <span onClick={handleClose}>X</span>
                </div>}
            </div>
            <div className="button-container">
                <button onClick={handleAdd}>Sucess toast</button>
                <button onClick={handleAdd}>Warning toast</button>
                <button onClick={handleAdd}>Error toast</button>
                <button onClick={handleAdd}>Info toast</button>
            </div>
        </div>
    )
}