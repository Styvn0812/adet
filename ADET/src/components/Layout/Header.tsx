import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon, BellIcon, PlusIcon } from 'lucide-react';
interface HeaderProps {
  activeView: string;
  calendarType?: string;
  setCalendarType?: (type: string) => void;
}
export function Header({
  activeView,
  calendarType,
  setCalendarType
}: HeaderProps) {
  const getTitle = () => {
    switch (activeView) {
      case 'calendar':
        return 'Calendar';
      case 'events':
        return 'Events';
      case 'profile':
        return 'Edit Profile';
      case 'preferences':
        return 'Preferences';
      case 'ai':
        return 'AI Suggestions';
      default:
        return 'Calendar';
    }
  };
  return <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center">
        <h1 className="text-2xl font-semibold text-gray-800">{getTitle()}</h1>
        {activeView === 'calendar' && <div className="ml-6 flex items-center space-x-2">
            <button className="p-1 rounded hover:bg-gray-100">
              <ChevronLeftIcon className="h-5 w-5 text-gray-500" />
            </button>
            <span className="text-sm font-medium">June 2023</span>
            <button className="p-1 rounded hover:bg-gray-100">
              <ChevronRightIcon className="h-5 w-5 text-gray-500" />
            </button>
          </div>}
      </div>
      <div className="flex items-center space-x-4">
        {activeView === 'calendar' && setCalendarType && <div className="flex items-center bg-gray-100 rounded-lg p-1">
            <button className={`px-3 py-1 text-sm rounded-md ${calendarType === 'month' ? 'bg-white shadow' : ''}`} onClick={() => setCalendarType('month')}>
              Month
            </button>
            <button className={`px-3 py-1 text-sm rounded-md ${calendarType === 'week' ? 'bg-white shadow' : ''}`} onClick={() => setCalendarType('week')}>
              Week
            </button>
          </div>}
        {(activeView === 'calendar' || activeView === 'events') && <button className="flex items-center bg-indigo-600 text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-indigo-700">
            <PlusIcon className="h-4 w-4 mr-1" />
            New Event
          </button>}
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <BellIcon className="h-5 w-5 text-gray-500" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
      </div>
    </header>;
}