import React, { useState } from 'react';
import { SearchIcon, FilterIcon, ClockIcon, MapPinIcon, TagIcon } from 'lucide-react';
export function EventList() {
  const [filter, setFilter] = useState('all');
  // Sample events data
  const events = [{
    id: 1,
    title: 'Team Weekly Sync',
    date: '2023-06-15',
    time: '10:00 AM - 11:00 AM',
    location: 'Conference Room A',
    category: 'work',
    priority: 'high'
  }, {
    id: 2,
    title: 'Lunch with Client',
    date: '2023-06-15',
    time: '12:30 PM - 2:00 PM',
    location: 'Bistro Downtown',
    category: 'work',
    priority: 'medium'
  }, {
    id: 3,
    title: 'Gym Session',
    date: '2023-06-16',
    time: '5:30 PM - 7:00 PM',
    location: 'Fitness Center',
    category: 'personal',
    priority: 'low'
  }, {
    id: 4,
    title: 'Doctor Appointment',
    date: '2023-06-17',
    time: '2:00 PM - 3:00 PM',
    location: 'Medical Center',
    category: 'personal',
    priority: 'high'
  }, {
    id: 5,
    title: 'Project Deadline',
    date: '2023-06-18',
    time: 'All Day',
    location: 'Office',
    category: 'work',
    priority: 'high'
  }];
  const filteredEvents = filter === 'all' ? events : events.filter(event => event.category === filter);
  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">
            High
          </span>;
      case 'medium':
        return <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
            Medium
          </span>;
      case 'low':
        return <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
            Low
          </span>;
      default:
        return null;
    }
  };
  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'work':
        return <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
            Work
          </span>;
      case 'personal':
        return <span className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-800">
            Personal
          </span>;
      default:
        return null;
    }
  };
  return <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input type="text" className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm" placeholder="Search events..." />
          </div>
          <div className="flex items-center">
            <button className="flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <FilterIcon className="h-4 w-4 mr-2" />
              Filter
            </button>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className={`px-3 py-1 text-sm rounded-full ${filter === 'all' ? 'bg-gray-200' : 'bg-gray-100'}`} onClick={() => setFilter('all')}>
            All
          </button>
          <button className={`px-3 py-1 text-sm rounded-full ${filter === 'work' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100'}`} onClick={() => setFilter('work')}>
            Work
          </button>
          <button className={`px-3 py-1 text-sm rounded-full ${filter === 'personal' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100'}`} onClick={() => setFilter('personal')}>
            Personal
          </button>
        </div>
      </div>
      <div className="divide-y divide-gray-200">
        {filteredEvents.map(event => <div key={event.id} className="p-4 hover:bg-gray-50">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-500">{event.date}</p>
              </div>
              <div className="flex space-x-2">
                {getPriorityBadge(event.priority)}
                {getCategoryBadge(event.category)}
              </div>
            </div>
            <div className="mt-2 text-sm text-gray-500">
              <div className="flex items-center mt-1">
                <ClockIcon className="h-4 w-4 mr-1" />
                {event.time}
              </div>
              <div className="flex items-center mt-1">
                <MapPinIcon className="h-4 w-4 mr-1" />
                {event.location}
              </div>
            </div>
            <div className="mt-3">
              <button className="text-sm text-indigo-600 hover:text-indigo-800">
                Edit
              </button>
              <span className="mx-2 text-gray-300">|</span>
              <button className="text-sm text-red-600 hover:text-red-800">
                Delete
              </button>
            </div>
          </div>)}
      </div>
    </div>;
}