import { Message } from "./message";
import styled from 'styled-components'

export const ChatList = ({messageList}) => {

    return (
        <ChatListStl>
            {
                messageList.map(i => (
                    <Message text={i.text} />
                ))
            }
        </ChatListStl>
    )
}


const ChatListStl = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 70vh;
  margin: 0 16px;
`