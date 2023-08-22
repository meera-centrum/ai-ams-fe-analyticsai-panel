import React, { MouseEvent, useCallback, useState } from 'react';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import Send from '@mui/icons-material/Send';
import './chat-input.css';

interface ChatInputProps {
  placeholder?: string;
  onSend: (text: string) => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({ placeholder, onSend }) => {
  const [inputText, setInputText] = useState<string>('');

  const sendMessage = useCallback(
    (text: string) => {
      if (text.length !== 0) {
        onSend(text);
        setInputText('');
      }
    },
    [onSend]
  );

  const onInputTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.currentTarget.value);
  };

  const onInputTextMouseDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.ctrlKey && event.key === 'Enter') {
        sendMessage(inputText);
      }
    },
    [sendMessage, inputText]
  );

  const handleInputClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      sendMessage(inputText);
    },
    [sendMessage, inputText]
  );

  const handleInputMouseDown = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
  };

  return (
    <FormControl className="chat-input-container" variant="outlined">
      <div className="chat-input-palceholder">
        <InputLabel>{placeholder}</InputLabel>
      </div>

      <OutlinedInput
        id="outlined-adornment-password"
        type="text"
        multiline={true}
        minRows={3}
        maxRows={3}
        value={inputText}
        onChange={onInputTextChange}
        onKeyDown={onInputTextMouseDown}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="send message"
              onClick={handleInputClick}
              onMouseDown={handleInputMouseDown}
              edge="end"
              color="primary"
              href=""
            >
              <Send />
            </IconButton>
          </InputAdornment>
        }
        label={placeholder}
      />
    </FormControl>
  );
};
