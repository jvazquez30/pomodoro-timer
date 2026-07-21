import { Settings } from 'lucide-react';


export default function Header() {

  return (
    <div className="flex justify-between p-2 border-b-1 w-10/12">
      <p className="text-xl font-bold">Lock-In</p>
      <ul>
        <li> <Settings size={25} /> </li>
        <li></li>
      </ul>
    </div>
  )
}