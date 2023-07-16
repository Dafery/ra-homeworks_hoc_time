import { FC } from 'react';

import { TVideo } from '../types';
import { DateTime } from './DateTime';

type TProps = TVideo;

export const Video: FC<TProps> = ({ url, date }) => {
  return (
    <div className="video">
      <iframe src={url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <DateTime date={date} />
    </div>
  );
};
