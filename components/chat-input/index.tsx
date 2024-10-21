'use client'
import { FormEvent, useState, useRef } from "react";

interface Props {
  sendMessage: (content: string) => Promise<boolean>
}

export const ChatInput: React.FC<Props> = ({ sendMessage }) => {
  const messageRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendClicked = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isLoading) return;

    const message = messageRef.current?.value.trim() || "";
    if (!message) return;
    setIsLoading(true);

    sendMessage(message).then((value) => {
      setIsLoading(false);
      if(value)
        messageRef.current!.value = "";
    });

  };

  return (
    <div className="sticky bottom-0">
      <form
        className="relative p-2 flex items-center w-full sticky bottom-0"
        onSubmit={sendClicked}
      >
        <input
          type="text"
          name="message"
          ref={messageRef}
          className="bg-yoru3 placeholder-tsuki1 w-full px-6 py-2 rounded-full pr-12 focus:outline-none focus:ring-1 ring-tsuki4"
          placeholder="Send a Message"
        />
        <button
          type="submit"
          disabled={isLoading}
          className={`absolute right-3 top-1/2 -translate-y-1/2 text-yoru0 rounded-full p-2 ${
            isLoading ? 'bg-tsuki0' : 'bg-tsuki4'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 256 256"
          >
            <path
              fill="#060914"
              d="M227.32 28.68a16 16 0 0 0-15.66-4.08h-.15L19.57 82.84a16 16 0 0 0-2.49 29.8L102 154l41.3 84.87a15.86 15.86 0 0 0 14.44 9.13q.69 0 1.38-.06a15.88 15.88 0 0 0 14-11.51l58.2-191.94v-.15a16 16 0 0 0-4-15.66m-69.49 203.17l-.05.14v-.07l-40.06-82.3l48-48a8 8 0 0 0-11.31-11.31l-48 48l-82.33-40.06h-.07h.14L216 40Z"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

