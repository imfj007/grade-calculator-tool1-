import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Layout({ children, currentPageName }) {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true';
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-slate-900 text-slate-100' 
        : 'bg-slate-50 text-slate-900'
    }`}>
      <style>{`
        :root {
          /* Professional Theme: Teal/Blue */
          --primary: ${darkMode ? '45 212 191' : '15 118 110'}; /* Teal */
          --primary-foreground: ${darkMode ? '15 23 42' : '240 253 250'};
          --background: ${darkMode ? '15 23 42' : '248 250 252'}; /* Almost White */
          --foreground: ${darkMode ? '248 250 252' : '15 23 42'};
          --card: ${darkMode ? '30 41 59' : '255 255 255'};
          --card-foreground: ${darkMode ? '248 250 252' : '15 23 42'};
          --border: ${darkMode ? '51 65 85' : '226 232 240'};
          --muted: ${darkMode ? '51 65 85' : '241 245 249'};
          --muted-foreground: ${darkMode ? '148 163 184' : '100 116 139'};
        }
        
        /* Grade Colors: Professional & Accessible */
        .grade-excellent { background: linear-gradient(135deg, rgb(22 163 74), rgb(21 128 61)); } /* Soft Green */
        .grade-good { background: linear-gradient(135deg, rgb(217 119 6), rgb(180 83 9)); } /* Amber/Orange */
        .grade-needs-improvement { background: linear-gradient(135deg, rgb(220 38 38), rgb(185 28 28)); } /* Muted Red */
