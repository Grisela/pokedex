"user client";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

interface IFormatFuncProps {
  date: string;
  format?: string;
  relativity?: "from" | "to" | "fromNow" | "toNow" | boolean;
}

const useDateFormatter = () => {
  const formatDate = (props: IFormatFuncProps) => {
    const { date, format = "D MMMM YYYY", relativity = false } = props;
    let tempDate = dayjs(date).format(format);

    if (relativity) {
      switch (relativity) {
        case "from":
          tempDate = dayjs().from(dayjs(date), true);
          break;
        case "fromNow":
          tempDate = dayjs(date).fromNow();
          break;
        case "to":
          tempDate = dayjs().to(date);
          break;
        case "toNow":
          tempDate = dayjs(date).toNow();
          break;
        default:
          break;
      }
    }

    return tempDate;
  };

  return { formatDate };
};

export default useDateFormatter;
