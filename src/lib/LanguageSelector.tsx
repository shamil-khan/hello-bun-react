import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Globe, Check } from 'lucide-react'; // Optional icson for the trigger; install lucide-react if needed: npm install lucide-react

export function LanguageSelector() {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'ur', label: 'اردو' },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language)?.label ||
    'Select Language';

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    // Handle RTL for Urdu
    if (i18n.language === 'ur') {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'ur';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = i18n.language;
    }
  }, [i18n.language]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' className='w-[180px] justify-between'>
          {currentLanguage}
          <Globe className='ml-2 h-4 w-4 opacity-50' />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        {languages.map((lang) => (
          <DropdownMenuItem
            className={lang.code === 'ur' ? 'font-urdu' : ''}
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}>
            {currentLanguage === lang.label ? (
              <Check className='mr-2 h-4 w-4' />
            ) : (
              <div className='mr-2 h-4 w-4' />
            )}
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
