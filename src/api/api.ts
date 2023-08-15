import { v4 } from 'uuid';

const END_POINT = 'http://localhost:3001';

export const generateMessage = async (chatId: string, message: string) => {
  return await fetch(`${END_POINT}/api/generate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chatId: chatId,
      content: message,
      createdAt: new Date().toString(),
      id: v4(),
      role: 'user',
    }),
  });
};
