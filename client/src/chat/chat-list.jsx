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

export const ChatList = ({messageList, loadMore}) => {

    const onLoadMore = () => {
        loadMore()
    }


    return (
        <ChatListStl>
            <div>
                {
                    messageList.map(i => (
                        <Message content={i.content} time={dateFormatParser(i.dateAt)} />
                    ))
                }
            </div>

            <ButtonContainerStl>
                <button onClick={onLoadMore}>Load more</button>
            </ButtonContainerStl>
        </ChatListStl>
    )
}


const ChatListStl = styled.div`
  display: flex;
  flex-direction: column-reverse;
  height: 70vh;
  margin: 0 16px;
  overflow-y: auto;
  width: 100%;
`

const ButtonContainerStl = styled.div`
  display: flex;
  justify-content: center;
  margin: 8px 0px;
`