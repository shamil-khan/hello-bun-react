import { useState } from 'react';
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
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className='text-red-600'>Hello ShadCN + ShadCN.UI</h1>
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
            <button
              onClick={() => setCount((count) => count + 1)}
              className='px-4 py-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700'>
              count is {count}
            </button>
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
    </>
  );
}

export default App;
