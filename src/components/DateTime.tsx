import { FC } from 'react';
import { DateTimePretty } from '../hocs/DateTimePretty';

type TProps = {
  date: string;
};

export let DateTime: FC<TProps> = ({ date }) => {
  return <p className="date">{date}</p>;
};

DateTime = DateTimePretty(DateTime)