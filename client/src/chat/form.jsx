import { useState } from "react"
import styled from 'styled-components'
import {ReactComponent as SendIcon} from '../attachments/send.svg'


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
            <FormStl>
                <InputStl type="text" value={message} onInput={event => setMessage(event.target.value)}/>
                <ButtonStl onClick={onSend}>
                    <SendIcon />
                </ButtonStl>
            </FormStl>
        </>
    )
}


const FormStl = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
`

const InputStl = styled.input`
  margin-left: 1.5%;
  width: 90%;
`

const ButtonStl = styled.button`
  border: none;
  background: inherit;
  width: 7%;
  margin-right: 1.5%;
  cursor: pointer;
  
  &:hover {
    opacity: .7;
  }
`