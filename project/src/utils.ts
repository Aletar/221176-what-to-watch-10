import { DurationTemplate, TextRating } from './const';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

const getHumanazeDate = (date: string) => dayjs(date).format('MMMM DD, YYYY');

const getTextRating = (rate?: number) => {
  if (rate === undefined) {
    return '';
  }
  if (rate < 3) {
    return TextRating.Bad;
  }
  if (rate < 5) {
    return TextRating.Normal;
  }
  if (rate < 8) {
    return TextRating.Good;
  }
  if (rate < 10) {
    return TextRating.VeryGood;
  }

  return TextRating.Awesome;
};

const huminazeDurationInMinutes = (minutes: number) => {

  const durationTime = dayjs.duration(minutes, 'minutes');
  const template = Math.trunc(minutes / 60) > 0 ? DurationTemplate.HoursMinutes : DurationTemplate.Minutes;

  return durationTime.format(template);
};

const huminazeDurationInSeconds = (seconds: number) => {

  const durationTime = dayjs.duration(seconds, 'seconds');

  let template = DurationTemplate.Seconds;
  if (Math.trunc(seconds / 3600) >= 1) {
    template = DurationTemplate.HoursMinutesSeconds;
  } else if (Math.trunc(seconds / 60) >= 1) {
    template = DurationTemplate.MinutesSeconds;
  } else {
    template = DurationTemplate.Seconds;
  }

  return durationTime.format(template);
};

// eslint-disable-next-line no-useless-escape
const isEmailValid = (email: string): boolean => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

const isPasswordValid = (password: string): boolean => /(?=.*[0-9])(?=.*[a-zA-Z])[0-9a-zA-Z]{2,}/.test(password);

export { getHumanazeDate, getTextRating, huminazeDurationInMinutes, huminazeDurationInSeconds, isEmailValid, isPasswordValid };
