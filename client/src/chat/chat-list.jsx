import { Message } from "./message";
import styled from 'styled-components'

const dateFormatParser = (tFormat) => {
    const date = new Date(tFormat)

    const hours = date.getHours()
    const minutes = date.getMinutes()

    const addZero = (value) => value > 9 ? value.toString() : `0${value}`

    const str = `${addZero(hours)}:${addZero(minutes)}`

    return str
}

export const ChatList = ({messageList}) => {

    return (
        <ChatListStl>
            {
                messageList.map(i => (
                    <Message content={i.content} time={dateFormatParser(i.dateAt)} />
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