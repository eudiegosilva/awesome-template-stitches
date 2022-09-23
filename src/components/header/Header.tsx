import { useTheme } from 'next-themes';
import { useState } from 'react';

import { SunIcon, MoonIcon } from '@radix-ui/react-icons';
import { Toggle, Logo } from 'components';

import * as s from './header.styles';

export type HeaderProps = any;

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isDarkTheme, setIsDarkTheme] = useState(theme === 'dark');

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    isDarkTheme ? setTheme('light') : setTheme('dark');
  };

  const ThemeIcon = () => (theme === 'light' ? <MoonIcon /> : <SunIcon />);

  return (
    <s.Header>
      <s.HeaderContainer>
        <Logo size={35} />
        <Toggle onClick={toggleTheme}>
          <ThemeIcon />
        </Toggle>
      </s.HeaderContainer>
    </s.Header>
  );
};

export { Header };
