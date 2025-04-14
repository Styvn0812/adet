import React from 'react';
import { CalendarIcon, ListIcon, UserIcon, SettingsIcon, SparklesIcon } from 'lucide-react';
interface SidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
}
export function Sidebar({
  activeView,
  setActiveView
}: SidebarProps) {
  const menuItems = [{
    id: 'calendar',
    label: 'Calendar',
    icon: CalendarIcon
  }, {
    id: 'events',
    label: 'Events',
    icon: ListIcon
  }, {
    id: 'profile',
    label: 'Profile',
    icon: UserIcon
  }, {
    id: 'preferences',
    label: 'Preferences',
    icon: SettingsIcon
  }, {
    id: 'ai',
    label: 'AI Assistant',
    icon: SparklesIcon
  }];
  return <div className="bg-white w-64 border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-xl font-bold text-indigo-600">AI Calendar</h1>
      </div>
      <nav className="flex-1 pt-4">
        <ul>
          {menuItems.map(item => <li key={item.id}>
              <button onClick={() => setActiveView(item.id)} className={`w-full flex items-center px-4 py-3 text-left ${activeView === item.id ? 'bg-indigo-50 text-indigo-600 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}>
                <item.icon className="h-5 w-5 mr-3" />
                {item.label}
              </button>
            </li>)}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-200">
        <button className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded flex items-center">
          <UserIcon className="h-4 w-4 mr-2" />
          Sign Out
        </button>
      </div>
    </div>;
}