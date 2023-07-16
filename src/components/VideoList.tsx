import { FC } from 'react';

import { TVideo } from '../types';
import { Video } from './Video';

type TProps = {
  list: TVideo[];
};

export const VideoList: FC<TProps> = ({ list }) => {
  return (
    <>
      {list.map((item) => (
        <Video key={item.id} url={item.url} date={item.date} />
      ))}
    </>
  );
};
