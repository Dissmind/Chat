import { useEffect, useRef, useState } from "react";
import io from "socket.io-client"
import { Form } from "./chat/form";
import { ChatList } from "./chat/chat-list";
import { mockMessageList } from "./mock";
import styled from 'styled-components'

const SERVER_HOST = 'http://127.0.0.1:3000'



export const App = ({}) => {
    const [messageList, setMessageList] = useState([])

    const socketRef = useRef(null)

    useEffect(() => {
        socketRef.current = io(SERVER_HOST, {
            reconnectionDelayMax: 10000,
        })

        socketRef.current.emit('connection', null)

        socketRef.current.on('recordMessage', (message) => {
            console.log(message)
            setMessageList(prev => [...prev, message])
        })
    }, [])

    useEffect(async () => {
        const response = await fetch(`${SERVER_HOST}/message`)
        const data = await response.json()

        setMessageList(data.list)
    }, [])


    const sendMessage = (message) => {
        socketRef.current.emit('sendMessage', {content: message})
    }


    return (
        <RootContainer>
            <AreaStl>
                <div>
                    <ChatList messageList={messageList} />
                </div>

                <Form sendMessage={sendMessage} />
            </AreaStl>
        </RootContainer>
    )
}



const RootContainer = styled.div`
  display: flex;
  justify-content: center;
`

const AreaStl = styled.div`
  background: #f8f8f8;
  height: 100vh;
  width: 30%;
`

