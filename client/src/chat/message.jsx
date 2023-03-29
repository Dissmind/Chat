import styled from 'styled-components'


export const Message = ({content}) => {

    return (
        <div>
            <MessageStl>
                <MessageTextStl>{content}</MessageTextStl>
                <TimeStl>15:32</TimeStl>
            </MessageStl>
        </div>
    )
}


const MessageStl = styled.div`
  display: inline-block;
  background: #2b5278;
  margin: 8px 0;
  padding: 8px 12px;
  border-radius: 5px;
`

const MessageTextStl = styled.span`
  font-family: "Segoe UI Variable";
  font-size: 12px;
  color: #fcfcfc;
`

const TimeStl = styled.span`
  color: #cccccc;
  font-size: 11px;
  padding-left: 4px;
`