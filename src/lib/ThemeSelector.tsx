// src/components/ThemeSelector.tsx
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Palette, Monitor, Check } from 'lucide-react'; // Assuming lucide-react icons are installed
import { useTheme, ThemeColors, type ThemeColor } from '@/lib/ThemeProvider';

const themeColors: { name: string; value: ThemeColor }[] = ThemeColors.map(
  (color) => ({
    name: color
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '),
    value: color,
  }),
);

export function ThemeSelector() {
  const { themeColor, setThemeColor, themeMode, setThemeMode } = useTheme();

  return (
    <div className='fixed top-4 right-4 z-50 flex items-center space-x-2'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='outline' size='icon'>
            <Palette className='h-[1.2rem] w-[1.2rem]' />
            <span className='sr-only'>Select color theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Color Theme</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {themeColors.map((c) => (
            <DropdownMenuItem
              key={c.name}
              onClick={() => setThemeColor(c.value)}>
              {themeColor === c.value ? (
                <Check className='mr-2 h-4 w-4' />
              ) : (
                <div className='mr-2 h-4 w-4' />
              )}
              <div
                className={`mr-2 h-3 w-3 rounded-full theme-${c.value} bg-primary`}
              />
              {c.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='outline' size='icon'>
            {themeMode === 'light' && <Sun className='h-[1.2rem] w-[1.2rem]' />}
            {themeMode === 'dark' && <Moon className='h-[1.2rem] w-[1.2rem]' />}
            {themeMode === 'system' && (
              <Monitor className='h-[1.2rem] w-[1.2rem]' />
            )}
            <span className='sr-only'>Select mode</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Mode</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setThemeMode('light')}>
            {themeMode === 'light' ? (
              <Check className='mr-2 h-4 w-4' />
            ) : (
              <div className='mr-2 h-4 w-4' />
            )}
            <Sun className='mr-2 h-4 w-4' />
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setThemeMode('dark')}>
            {themeMode === 'dark' ? (
              <Check className='mr-2 h-4 w-4' />
            ) : (
              <div className='mr-2 h-4 w-4' />
            )}
            <Moon className='mr-2 h-4 w-4' />
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setThemeMode('system')}>
            {themeMode === 'system' ? (
              <Check className='mr-2 h-4 w-4' />
            ) : (
              <div className='mr-2 h-4 w-4' />
            )}
            <Monitor className='mr-2 h-4 w-4' />
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
