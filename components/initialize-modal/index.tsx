'use client'
import { generateAssistant } from "@/lib/ai";
import { AssistantInfo } from "@/types"
import { Dispatch, FormEvent, SetStateAction, useState } from "react";

interface Props {
  setAssistant: Dispatch<SetStateAction<AssistantInfo|null>>
}

export const InitializeModal: React.FC<Props> = ({setAssistant}) => {
  const [prompt, setPrompt] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const bootstrapAssistant = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(prompt)
    setIsLoading(true);
    const assistant = await generateAssistant(prompt)
    setIsLoading(false)
    if (assistant){
      setAssistant(assistant)
      return;
    }
  }

  return (
    <div className="w-screen h-screen absolute inset-0 bg-yoru1 z-10 backdrop-blur-2xl flex items-center justify-center">
      <form onSubmit={bootstrapAssistant} className="bg-tsuki3 w-full m-8 p-8 text-sm flex flex-col items-center text-yoru3 gap-4">
        <h1 className="text-lg font-semibold">Fancy a companion?</h1>
        <textarea name="prompt" placeholder="I seek counsel from Lord Vader, the Sith Lord!" 
          className="bg-tsuki3 placeholder-tsuki0 border border-yoru0 w-full h-16 p-2 focus:outline-none"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button type="submit" disabled={prompt === ""} className="disabled:text-tsuki1 flex w-fit items-center gap-2">
          <span>Let's Chat</span>
          {isLoading ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="#060914" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"/><path fill="#060914" d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></svg>: ""}
        </button>
      </form>
    </div>
  )
}
