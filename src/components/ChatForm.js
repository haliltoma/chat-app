import React,{useState} from 'react'
import style from './style.module.css'
import {sendMessage} from "../socketApi"
import {useChat} from "../context/ChatContext"
function ChatForm() {
  const [message,setMessage]=useState('')

  const {setMessages} = useChat();
  const handleSubmit= (e)=>{
    e.preventDefault()
    setMessages((prevState)=> [...prevState,{message , fromMe: true}])
    sendMessage(message)
    console.log('calisiyor 1 kere')
    setMessage('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
          <input value={message}   className={style.textInput} onChange={(e)=> setMessage(e.target.value)}/>
      </form>
    </div>
  )
}

export default ChatForm
