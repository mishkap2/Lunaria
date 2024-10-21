export interface Message {
  role: 'system' | 'user' | 'assistant',
  content: string
}

export interface AssistantInfo {
  name: string,
  avatar_url: string,
  system_message: string,
  typing: boolean,
}
