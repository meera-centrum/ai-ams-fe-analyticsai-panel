import { nanoid } from 'nanoid';

// const END_POINT = 'http://localhost:3001';

export const generateMessage = async (
  chatId: string,
  url: string,
  cookie: string,
  message: string,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  return fetch(`${url}/api/generate`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      cookie: cookie,
    },
    body: JSON.stringify({
      chatId: chatId,
      content: message,
      createdAt: new Date(),
      id: nanoid(),
      role: 'user',
    }),
  })
    .then((res) => {
      if (res.ok) {
        setLoading(false);
        return res.json();
      }
      return res
        .text()
        .then((text) => Promise.reject(text))
        .catch(() => Promise.reject(res.statusText));
    })
    .catch((error) => {
      setLoading(false);
      console.log('catch error on analytics ai project' + error);
    });
};
