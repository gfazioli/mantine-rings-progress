import { useEffect, useState } from 'react';
import { RingsProgress } from '@gfazioli/mantine-rings-progress';
import {
  ActionIcon,
  Box,
  Button,
  Center,
  Group,
  NumberInput,
  Stack,
  Switch,
  Text,
} from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

function Wrapper() {
  const [inputMinutes, setInputMinutes] = useState(10);
  const [timeLeft, setTimeLeft] = useState(inputMinutes * 60 * 100);
  const [isRunning, setIsRunning] = useState(false);
  const [displayHundredthsSeconds, setDisplayHundredthsSeconds] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 10);

    return () => clearInterval(timer);
  }, [isRunning]);

  const handleStartPause = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(inputMinutes * 60 * 100);
  };

  const handleInputChange = (value: string | number) => {
    const minutes = typeof value === 'number' ? value : parseInt(value, 10);
    setInputMinutes(isNaN(minutes) ? 0 : minutes);
    setTimeLeft((isNaN(minutes) ? 0 : minutes) * 60 * 100);
  };

  const totalSeconds = Math.floor(timeLeft / 100);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const hundredthsSeconds = timeLeft % 100;

  const minutesPercent = (minutes / inputMinutes) * 100;
  const secondsPercent = (seconds / 60) * 100;
  const hundredthsSecondsPercent = (hundredthsSeconds / 100) * 100;

  const rings = [
    { value: minutesPercent, color: 'green' },
    { value: secondsPercent, color: 'blue' },
    ...(displayHundredthsSeconds ? [{ value: hundredthsSecondsPercent, color: 'red' }] : []),
  ];

  return (
    <Stack h={250} align="stretch">
      <Group align="center" justify="center">
        <NumberInput
          size="xs"
          disabled={isRunning}
          value={inputMinutes}
          onChange={handleInputChange}
          placeholder="Minutes"
          min={0}
        />
        <Button size="xs" onClick={handleStartPause} ml={10}>
          {isRunning ? 'Pause' : 'Start'}
        </Button>
        <Button size="xs" onClick={handleReset} ml={10}>
          Reset
        </Button>
        <Switch
          checked={displayHundredthsSeconds}
          onChange={(event) => setDisplayHundredthsSeconds(event.currentTarget.checked)}
          label="Hundredths of Seconds"
        />
      </Group>

      <Center>
        <Box h={200} w={200}>
          <RingsProgress
            size={200}
            thickness={12}
            rings={rings}
            label={
              <ActionIcon color="yellow" variant="outline" radius="xl" size={64}>
                <Text size="md">
                  {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                </Text>
              </ActionIcon>
            }
          />
        </Box>
      </Center>
    </Stack>
  );
}

const code = `
import { useEffect, useState } from 'react';
import { RingsProgress } from '@gfazioli/mantine-rings-progress';
import {
  ActionIcon,
  Box,
  Button,
  Center,
  Group,
  NumberInput,
  Stack,
  Switch,
  Text,
} from '@mantine/core';

function Demo() {
  const [inputMinutes, setInputMinutes] = useState(10);
  const [timeLeft, setTimeLeft] = useState(inputMinutes * 60 * 100);
  const [isRunning, setIsRunning] = useState(false);
  const [displayHundredthsSeconds, setDisplayHundredthsSeconds] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 10);

    return () => clearInterval(timer);
  }, [isRunning]);

  const handleStartPause = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(inputMinutes * 60 * 100);
  };

  const handleInputChange = (value: string | number) => {
    const minutes = typeof value === 'number' ? value : parseInt(value, 10);
    setInputMinutes(isNaN(minutes) ? 0 : minutes);
    setTimeLeft((isNaN(minutes) ? 0 : minutes) * 60 * 100);
  };

  const totalSeconds = Math.floor(timeLeft / 100);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const hundredthsSeconds = timeLeft % 100;

  const minutesPercent = (minutes / inputMinutes) * 100;
  const secondsPercent = (seconds / 60) * 100;
  const hundredthsSecondsPercent = (hundredthsSeconds / 100) * 100;

  const rings = [
    { value: minutesPercent, color: 'green' },
    { value: secondsPercent, color: 'blue' },
    ...(displayHundredthsSeconds ? [{ value: hundredthsSecondsPercent, color: 'red' }] : []),
  ];

  return (
    <Stack h={250} align="stretch">
      <Group align="center" justify="center">
        <NumberInput
          size="xs"
          disabled={isRunning}
          value={inputMinutes}
          onChange={handleInputChange}
          placeholder="Minutes"
          min={0}
        />
        <Button size="xs" onClick={handleStartPause} ml={10}>
          {isRunning ? 'Pause' : 'Start'}
        </Button>
        <Button size="xs" onClick={handleReset} ml={10}>
          Reset
        </Button>
        <Switch
          checked={displayHundredthsSeconds}
          onChange={(event) => setDisplayHundredthsSeconds(event.currentTarget.checked)}
          label="Hundredths of Seconds"
        />
      </Group>

      <Center>
        <Box h={200} w={200}>
          <RingsProgress
            size={200}
            thickness={12}
            rings={rings}
            label={
              <ActionIcon color="yellow" variant="outline" radius="xl" size={64}>
                <Text size="md">
                  {minutes < 10 ? \`0\${minutes}\` : minutes}:{seconds < 10 ? \`0\${seconds}\` : seconds}
                </Text>
              </ActionIcon>
            }
          />
        </Box>
      </Center>
    </Stack>
  );
}
`;

export const countdown: MantineDemo = {
  type: 'code',
  component: Wrapper,
  minHeight: 100,
  code,
  defaultExpanded: false,
};
