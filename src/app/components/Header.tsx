"use client"
import { Settings, Sun, MoonStar,} from 'lucide-react';
import { useState } from 'react';


export default function Header() {
  const [theme, setTheme] = useState<'light' | 'dark'>("light");

  

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className="flex justify-between p-2 border-b w-11/12">
      <p className="text-xl font-bold">Lock-In</p>
      <ul className='flex justify-between gap-1.5'>
         <li className=''>
        <button type='button' onClick={handleToggleTheme}>
          {theme === 'light' ? 
          <Sun size={25} className='animate-icon-in'></Sun> 
          : 
          <MoonStar size={25} className='animate-icon-in'></MoonStar>}
          </button>  
         </li>

        <li> <Settings size={25} /> </li>
      </ul>
    </div>
  )
}