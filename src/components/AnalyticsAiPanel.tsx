import React from 'react';
import { PanelProps } from '@grafana/data';
import { AnalyticsAiOptions } from 'types';
import { css, cx } from '@emotion/css';
import { useStyles2 } from '@grafana/ui';
import { Chat } from './Chat';

interface Props extends PanelProps<AnalyticsAiOptions> {}

const QUERY_TEXTFIELD_PLACEHOLDER = 'Type here to ask your query...';

const getStyles = () => {
  return {
    wrapper: css`
      font-family: Open Sans;
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

export const AnalyticsAiPanel: React.FC<Props> = ({ options, data, width, height }) => {
  // const theme = useTheme2();
  const styles = useStyles2(getStyles);
  //
  const rows = data.series.flatMap((d) => d.fields.flatMap((item) => item.values));
  const messageItem = rows.map((item) => ({ text: item }));

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
      {/* <svg
        className={styles.svg}
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox={`-${width / 2} -${height / 2} ${width} ${height}`}
      >
        <g>
          <circle style={{ fill: theme.colors.primary.main }} r={100} />
        </g>
      </svg>

      <div className={styles.textBox}>
        {options.showSeriesCount && <div>Number of series: {data.series.length}</div>}
        <div>Text option value: {options.text}</div>
      </div> */}

      <Chat placeholder={QUERY_TEXTFIELD_PLACEHOLDER} messageItem={messageItem} />
    </div>
  );
};
