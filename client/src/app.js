import { useEffect, useRef, useState } from "react";
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

    const mockMessageList = [
        {
            text: 'first'
        },
        {
            text: 'second'
        },
        {
            text: 'third'
        }
    ]
    const [messageList, setMessageList] = useState(mockMessageList)

    const socketRef = useRef(null)

    useEffect(() => {
        socketRef.current = io('http://127.0.0.1:3000', {
            reconnectionDelayMax: 10000,
        })

        socketRef.current.emit('connection', null)

        socketRef.current.on('chat message', (message) => {
            setMessageList(prev => [...prev, {text: message}])
        })
    }, [])


    const sendMessage = (message) => {
        socketRef.current.emit('chat message', message)
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