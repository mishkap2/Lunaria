'use client'

import { ChatInput } from "@/components/chat-input";
import { ChatBubble } from "@/components/chat-bubble";
import { Header } from "@/components/header";
import { AssistantInfo, Message } from "@/types";
import { useEffect, useRef, useState } from "react";
import { InitializeModal } from "@/components/initialize-modal";
import { completeMessage } from "@/lib/ai";

export default function Home() {
  const messagesEndRef = useRef<null | HTMLDivElement>(null)
  const [assistant, setAssistant] = useState<AssistantInfo|null>(null);
  var [messages, setMessages] = useState<Array<Message>>([]);


  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const updateTyping = (value: boolean) => {
    if(assistant){
      setAssistant({
        ...assistant, typing: value
      })
    }
  }

  useEffect(() => {
    if(assistant && messages.length === 0){
      messages.push({
        role: 'system', content: assistant.system_message
      })
    }
  }, [assistant])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = async (content: string) => {
    if(!content || !assistant) return false;
    updateTyping(true)

    const response = await completeMessage([...messages, {role: 'user', content: content}])
    if(response){
      setMessages([
        ...messages,
        {role: 'user', content: content},
        response
      ])
    }
    updateTyping(false)
    return true;
  }
  return (
    <>
      { assistant === null ? <InitializeModal setAssistant={setAssistant} /> : <Header assistant={assistant} /> }
      <main className="h-full flex-grow p-2 text-sm flex flex-col gap-2">
        {messages.map(({role, content}, index) => {
          return <ChatBubble key={index} role={role} content={content}></ChatBubble>
        })}
        <div ref={messagesEndRef} />
      </main>
      <ChatInput sendMessage={sendMessage} />
    </>
  );
}
