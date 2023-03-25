import { useEffect, useRef, useState } from "react";
import io from "socket.io-client"
import { Form } from "./chat/form";
import { ChatList } from "./chat/chat-list";
import { mockMessageList } from "./mock";


const SERVER_HOST = 'http://127.0.0.1:3000'



export const App = ({}) => {
    const [messageList, setMessageList] = useState(mockMessageList)

    const socketRef = useRef(null)

    useEffect(() => {
        socketRef.current = io(SERVER_HOST, {
            reconnectionDelayMax: 10000,
        })

        socketRef.current.emit('connection', null)

        socketRef.current.on('recordMessage', (message) => {
            setMessageList(prev => [...prev, {text: message}])
        })
    }, [])


    const sendMessage = (message) => {
        socketRef.current.emit('sendMessage', message)
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