import React from "react";
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {dialogsUserIdSelector, setDialogsUserId, SetDialogsUserIdPayload} from "./chat.slice";


export const ChatDialogs = ({}) => {

  const [chatList, setChatList] = useState([
    {
      id: 1,
      name: 'User 1'
    },
    {
      id: 2,
      name: 'User 2'
    },
    {
      id: 3,
      name: 'User 3'
    }
  ])

  const dispatch = useDispatch()

  const onOpenDialog = (event: any, id: number) => {
    const payload: SetDialogsUserIdPayload = {
      id: id
    }

    dispatch(setDialogsUserId(payload))
  }

  const dialogsUserId = useSelector(dialogsUserIdSelector)


  return (
    <>
      <h1>
        Id: {dialogsUserId}
      </h1>
      {
        chatList.map(i => (
          <div onClick={(event) => onOpenDialog(event, i.id)}>
            <div>{i.name}</div>
          </div>
        ))
      }
    </>
  )
}