import { useState } from "react"


export const Form = ({sendMessage}) => {

    const [message, setMessage] = useState('')

    const onSend = () => {
        const tempMessage = message

        // clear input
        setMessage('')

        sendMessage(tempMessage)
    }


    return (
        <>
            <div>
                <input type="text" value={message} onInput={event => setMessage(event.target.value)}/>
                <button onClick={onSend}>Send</button>
            </div>
        </>
    )
}