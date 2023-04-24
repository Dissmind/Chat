import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import { ChatList } from "../chat/chat-list";
import { Form } from "../chat/form";
import styled from "styled-components";

export const SERVER_HOST = 'http://127.0.0.1:3000'


const getMessage = async (take, skip) => {
    const limitsQuery = `?take=${take}&skip=${skip}`

    const response = await fetch(`${SERVER_HOST}/message${take!=undefined?limitsQuery:''}`)
    const data = await response.json()

    return data
}


export const ChatPage = () => {

    const [messageList, setMessageList] = useState([])

    const socketRef = useRef(null)

    useEffect(() => {
        socketRef.current = io(SERVER_HOST, {
            reconnectionDelayMax: 10000,
        })

        socketRef.current.emit('connection', null)

        socketRef.current.on('recordMessage', (message) => {
            setMessageList(prev => [...prev, message])
        })
    }, [])

    const pageLimit = 10

    useEffect( () => {
        (async () => {
            const data = await getMessage(pageLimit, 0)

            setMessageList(data.list)
        })()
    }, [])


    const sendMessage = (message) => {
        socketRef.current.emit('sendMessage', {content: message})
    }


    const [actualPage, setActualPage] = useState(1)

    const loadMore = () => {
        (async () => {
            const data = await getMessage(pageLimit, pageLimit * actualPage)
            setMessageList(prev => [...prev, ...data.list])
            setActualPage(prev => prev + 1)
        })()
    }


    return (
        <RootContainer>
            <AreaStl>
                <SidePanelContainer>

                </SidePanelContainer>

                <ChatContainer>
                  <ChatList messageList={messageList} loadMore={loadMore} />
                  <Form sendMessage={sendMessage} />
                </ChatContainer>
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
  width: 70%;
    
  display: flex;
`

const SidePanelContainer = styled.div`
  width: 40%;
  height: 100vh;
`
const ChatContainer = styled.div`
  width: 60%;
`