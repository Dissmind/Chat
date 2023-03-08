import { Message } from "./message";

export const ChatList = ({messageList}) => {

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