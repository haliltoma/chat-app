import React from 'react'
import style from './style.module.css'
import {useChat} from '../context/ChatContext'
import ChatItem from './ChatItem'
import ScrollableFeed from 'react-scrollable-feed'
function ChatList() {
  const {messages} = useChat();
  console.log('mehmetcan')

  return (
    <div
     className={style.chatlist}>ChatList
     
    <ScrollableFeed>
    {
        messages.map((item,key)=>(
         <ChatItem key={key} item={item}/>
         

        ))
      
      }

    </ScrollableFeed>


     </div>
  )
}

export default ChatList