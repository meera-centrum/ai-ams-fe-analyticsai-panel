import React from 'react';
import { PanelProps } from '@grafana/data';
import { css, cx } from '@emotion/css';
import { useStyles2 } from '@grafana/ui';
import { Chat } from './Chat';
import { AnalyticsAiOptions } from '../types';
import './analyticsai-panel.css';

interface Props extends PanelProps<AnalyticsAiOptions> {}

const QUERY_TEXTFIELD_PLACEHOLDER = 'Type here to ask your query...';

const getStyles = () => {
  return {
    wrapper: css`
      position: relative;
    `,
    svg: css`
      position: absolute;
      top: 0;
      left: 0;
    `,
    textBox: css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
    `,
  };
};

export const AnalyticsAiPanel: React.FC<Props> = ({ options, data, width, height, replaceVariables }) => {
  const styles = useStyles2(getStyles);

  const contents = data.series
    .map((d) => d.fields.find((f) => f.name === 'content'))
    .map((f) => f?.values)
    .at(-1)
    ?.toArray();

  const messageItem = contents ? contents.map((item) => ({ text: item })) : [];
  //
  const { chatId, url, cookie } = options;
  const chatIdQueryParameter = replaceVariables(`$${chatId}`);
  const urlQueryParameter = replaceVariables(`$${url}`);
  const cookieQueryParameter = replaceVariables(`$${cookie}`);

  /** Renderer */
  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          width: ${width}px;
          height: ${height}px;
        `
      )}
    >
      <Chat
        placeholder={QUERY_TEXTFIELD_PLACEHOLDER}
        messageItem={messageItem}
        chatId={chatIdQueryParameter}
        url={urlQueryParameter}
        cookie={cookieQueryParameter}
      />
    </div>
  );
};
