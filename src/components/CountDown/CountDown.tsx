import { useEffect, useState } from "react";
import Box from "../Box/Box";
import Text from "../Text/Text";

const useCountDown = (minutes: number) => {
  const [countSeconds, setCoundSeconds] = useState(minutes * 60);
  const [isCounting, setIsCounting] = useState(false);

  const totalMinutes = Math.floor(countSeconds / 60);
  const seconds = countSeconds % 60;
  const secondsFormated = seconds.toString().padStart(2, "0");

  useEffect(() => {
    if (countSeconds === 0) {
      setIsCounting(false);
      setCoundSeconds(minutes * 60);
      return;
    }
    if (isCounting === true) {
      setTimeout(() => {
        setCoundSeconds(countSeconds - 1);
      }, 1000);
    }
  }, [countSeconds, isCounting]);
  const CountDown = () => {
    return (
      <Box width={100}>
        <Text
          color="grey500"
          fontSize={16}
          text={`${totalMinutes} : ${secondsFormated}`}
        />
      </Box>
    );
  };

  return {
    Count: CountDown,
    isCounting,
    setCount: () => setIsCounting(true),
  };
};

export default useCountDown;
