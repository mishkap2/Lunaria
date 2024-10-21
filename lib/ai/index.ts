'use server'

import { AssistantInfo, Message } from '@/types';
import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
});

export const generateAssistant = async (prompt: string): Promise<AssistantInfo | undefined> => {
  const assistant_profile = await client.chat.completions.create({
    model: "gpt-4o-mini-2024-07-18",
    messages: [
      { role: "system", content: "You are a masterful prompt engineer. You will be given prompts of persons that users want to talk to. Generate system prompts for a Large Language Model to talk to a user in that persona. You will be asked to generate a name for the persona, it can be from the prompt itself if its a direct and explicit prompt like 'i want to talk to einstein', but can be something appropriate sounding for prompts like 'a cheerful companion to talk about my day to'. you will also be asked to generate another prompt to generate an avatar of the persona." },
      {
        role: "user",
        content: prompt,
      },
    ],
    response_format: {
      // See /docs/guides/structured-outputs
      type: "json_schema",
      json_schema: {
        name: "email_schema",
        schema: {
          type: "object",
          properties: {
            name: {
              description: "name of the persona",
              type: "string"
            },
            system_prompt: {
              description: "system prompt for the LLM to derive its persona and behavior from",
              type: "string"
            },
            avatar_description: {
              description: "prompt to generate an avatar for the said avatar",
              type: "string"
            }
          },
          additionalProperties: false
        }
      }
    }
  });

  const content = assistant_profile.choices[0].message.content
  console.log(content)
  const {name, avatar_description, system_prompt} = JSON.parse(content || "")
  console.log(name)
  console.log(avatar_description)

  const response = await client.images.generate({
    model: "dall-e-2",
    prompt: avatar_description,
    n: 1,
    size: "256x256"
  });

  return {
    name: name,
    avatar_url: response.data[0].url || "",
    system_message: system_prompt,
    typing: false
  }
}

export const completeMessage = async (messages: Array<Message>): Promise<Message | undefined> => {
  const completion = await client.chat.completions.create({
    model: "gpt-4o",
    messages: messages 
  });

  const response = completion.choices[0].message
  if (response && !response.refusal) {
    return {
      role: 'assistant',
      content: response.content || ""
    }
  }
}
