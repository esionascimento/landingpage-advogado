'use client';
import { Button } from '@mui/material';
import useSettings from '@/hooks/useSettings';

type Props = {};

export function ModeToggle({}: Props) {
  const { onToggleMode } = useSettings();

  return (
    <>
      <Button
        onClick={() => {
          console.log('Toggle mode');
          onToggleMode();
        }}
      >
        Mode light
      </Button>
    </>
  );
}
