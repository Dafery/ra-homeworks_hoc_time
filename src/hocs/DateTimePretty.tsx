import dayjs from 'dayjs';
import { ComponentType, FC } from 'react';

type TProps = {
  date: string;
};

export function DateTimePretty<T>(Component: ComponentType<T & TProps>): FC<T & TProps> {
  return (props) => {
    const formatDate = (date: string) => {
      const diffMinutes = (Date.now() / 1000 - dayjs(date).unix()) / 60;

      if (diffMinutes < 60) {
        return `${Math.floor(diffMinutes)} минут назад`;
      }

      if (diffMinutes < 1440) {
        return `${Math.floor(diffMinutes / 60)} часов назад`;
      }

      return `${Math.floor(diffMinutes / 1440)} дней назад`;
    };

    const date = formatDate(props.date);

    return <Component {...props} date={date} />;
  };
}
