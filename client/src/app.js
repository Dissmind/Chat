import { createContext, useContext, useEffect, useState } from "react";
import io from "socket.io-client"

const Message = ({text}) => {

    return (
        <div>
            {text}
        </div>
    )
}



const ChatList = ({messageList}) => {

    return (
        <>
            {
                messageList.map(i => (
                    <Message text={i.text} />
                ))
            }
        </>
    )
}


const Form = ({sendMessage}) => {

    const [message, setMessage] = useState('')

    const onSend = () => {
        const tempMessage = message

        // clear input
        setMessage('')

        sendMessage(message)
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




export const App = ({}) => {

    const [messageList, setMessageList] = useState([
        {
            text: 'first'
        },
        {
            text: 'second'
        },
        {
            text: 'third'
        }
    ])


    useEffect(() => {
        const socket = io('http://127.0.0.1:3000', {
            reconnectionDelayMax: 10000,
        })

        socket.emit('connection', null)
    }, [])

    const sendMessage = (message) => {
        const socket = io('http://127.0.0.1:3000', {
            reconnectionDelayMax: 10000,
        })

        socket.emit('chat message', message)

        console.log('qwe')
    }


    return (
        <>

            <div>
                <ChatList messageList={messageList} />
            </div>

            <Form sendMessage={sendMessage} />
        </>
    )
}