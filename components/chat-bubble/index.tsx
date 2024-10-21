import { Message } from "@/types"

export const ChatBubble: React.FC<Message> = ({role, content}) => {
  if (role === 'system') return;
  return (
    <div className="w-full flex">
      <div className={`bubble-${role}`}>
        {content}
      </div>
    </div>
  )
}
