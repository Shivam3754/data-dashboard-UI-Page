import React from 'react';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '@mui/material/styles';
import { Theme, createTheme } from '@mui/material';

interface ThemeToggleProps {
  setTheme: (theme: Theme) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ setTheme }) => {
  const theme = useTheme();

  const toggleTheme = () => {
    const newTheme = createTheme({
      palette: {
        mode: theme.palette.mode === 'light' ? 'dark' : 'light',
        primary: theme.palette.primary,
        secondary: theme.palette.secondary,
        // Add any other palette properties you need here
      },
    });

    setTheme(newTheme);
  };

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {theme.palette.mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
    </IconButton>
  );
};

export default ThemeToggle;
