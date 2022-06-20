import React from 'react'
import style from './style.module.css'
import {useChat} from '../context/ChatContext'
import ChatItem from './ChatItem'

function ChatList() {
  const {messages} = useChat();
  console.log('mehmetcan')

  return (
    <div
     className={style.chatlist}>ChatList
     
    <div>
    {
        messages.map((item,key)=>(
         <ChatItem key={key} item={item}/>
         

        ))
      
      }

    </div>


     </div>
  )
}

export default ChatList