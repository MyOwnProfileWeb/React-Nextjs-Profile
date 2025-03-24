import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import {PrimeReactProvider} from "primereact/api";
import Intro from "@/components/Intro";
import Footer from "@/components/layout/Footer";
import {Button} from "primereact/button";

export default function Home() {
  const [theme, setTheme] = useState<string>('');

  // const handleThemeChange = (newTheme: string) => {
  //   setTheme(newTheme);
  //   applyTheme(newTheme);
  // };

  // const applyTheme = (theme: string) => {
  //   const existingLinks = document.querySelectorAll('link[rel="stylesheet"][data-theme]');
  //   existingLinks.forEach(link => link.remove());
  //
  //   const link = document.createElement('link');
  //   link.rel = 'stylesheet';
  //   link.href = `/themes/${theme}/theme.css`;
  //   link.dataset.theme = theme;
  //   document.head.appendChild(link);
  //
  //   if (typeof window !== 'undefined') {
  //     localStorage.setItem('theme', theme);
  //   }
  // };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || '';
    setTheme(savedTheme);
    // applyTheme(savedTheme);
  }, []);

  return (
      <PrimeReactProvider>
        <div className="flex flex-col min-h-screen">
          <Header setTheme={function(theme: string): void {
                  throw new Error('Function not implemented.');
              } } />
          <main className="flex-grow flex justify-center items-center p-4">
            <Intro />
            <Button
                icon="pi pi-question-circle"
                className="p-button-rounded p-button-text"
                onClick={() => window.location.href = '/quiz'}
            />
          </main>
          <Footer  />
        </div>
      </PrimeReactProvider>
  );
}