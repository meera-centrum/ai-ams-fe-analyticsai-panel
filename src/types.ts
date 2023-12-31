type SeriesSize = 'sm' | 'md' | 'lg';

export interface AnalyticsAiOptions {
  text: string;
  showSeriesCount: boolean;
  seriesCountSize: SeriesSize;
  chatId: string;
  url: string;
  cookie: string;
}
