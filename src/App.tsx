import { useTranslation } from 'react-i18next';
import { ThemeProvider } from '@/lib/ThemeProvider';
import { ThemeSelector } from '@/lib/ThemeSelector';
import { LanguageSelector } from '@/lib/LanguageSelector';
import { LoginForm } from '@/components/login-form';
import { AppSidebar } from '@/components/app-sidebar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import '@/Themes.css';
import '@/App.css';

function App() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  return (
    <ThemeProvider>
      <div
        className={`fixed top-4 ${isRTL ? 'left-4' : 'right-4'} z-50 flex items-center space-x-2`}>
        <LanguageSelector />
        <ThemeSelector />
      </div>
      <h1 className='text-2xl font-bold'>{t('welcome')}</h1>
      <SidebarProvider
        style={
          {
            '--sidebar-width': '350px',
          } as React.CSSProperties
        }>
        <AppSidebar />
        <SidebarInset>
          <header className='bg-background sticky top-0 flex shrink-0 items-center gap-2 border-b p-4'>
            <SidebarTrigger className='-ml-1' />
            <Separator
              orientation='vertical'
              className='mr-2 data-[orientation=vertical]:h-4'
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className='hidden md:block'>
                  <BreadcrumbLink href='#'>All Inboxes</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className='hidden md:block' />
                <BreadcrumbItem>
                  <BreadcrumbPage>Inbox</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </header>
          <div className='card'>
            <LoginForm />
          </div>

          <div className='flex flex-1 flex-col gap-4 p-4'>
            {Array.from({ length: 24 }).map((_, index) => (
              <div
                key={index}
                className='bg-muted/50 aspect-video h-12 w-full rounded-lg'
              />
            ))}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  );
}

export default App;
