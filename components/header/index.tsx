'use client';

import { AssistantInfo } from "@/types";
import Image from "next/image"

interface Props {
  assistant: AssistantInfo
}

export const Header: React.FC<Props> = ({assistant}) => {
  return (
    <header className="w-full text-center border-b border-tsuki0 sticky top-0 py-4 px-2 text-lg bg-yoru0 flex items-center gap-2">
      <Image src={assistant.avatar_url} height={32} width={32} alt={assistant.name} className="rounded-full" />
      <div className="flex flex-col items-start">
        <span className="text-sm">{assistant.name}</span>
        <span className="text-tsuki0 text-xs">{assistant.typing?"typing...":"online"}</span>
      </div>
    </header>
  );
}
