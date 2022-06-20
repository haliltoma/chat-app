import React,{useEffect} from 'react'
import ChatList from './ChatList'
import ChatForm from './ChatForm'
import {init, subscribeChat,subscribeInitialMessages } from "../socketApi"
import {useChat} from "../context/ChatContext"
function Container() {
const {setMessages} = useChat();
  useEffect(()=>{
      init();
      subscribeInitialMessages((messages) => setMessages(messages));
      subscribeChat((message)=>{
        setMessages(prevState => [...prevState, {message}])
        console.log('container')
      });
  })

  return (
    <div className='app'>
    <h2>Chat app</h2>
        <ChatList/>
        <ChatForm/>
    </div>
  )
}

export default Container