import React, { useState } from 'react';
import { Sidebar } from './components/Layout/Sidebar';
import { Header } from './components/Layout/Header';
import { CalendarView } from './components/Calendar/CalendarView';
import { EventList } from './components/Calendar/EventList';
import { SignIn } from './components/Auth/SignIn';
import { EditProfile } from './components/Profile/EditProfile';
import { Preferences } from './components/Profile/Preferences';
import { AISuggestions } from './components/AI/AISuggestions';
export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeView, setActiveView] = useState('calendar'); // calendar, events, profile, preferences, ai
  const [calendarType, setCalendarType] = useState('month'); // month, week
  if (!isLoggedIn) {
    return <SignIn onLogin={() => setIsLoggedIn(true)} />;
  }
  return <div className="flex h-screen bg-gray-50">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header activeView={activeView} calendarType={calendarType} setCalendarType={setCalendarType} />
        <main className="flex-1 overflow-y-auto p-4">
          {activeView === 'calendar' && <CalendarView type={calendarType} />}
          {activeView === 'events' && <EventList />}
          {activeView === 'profile' && <EditProfile />}
          {activeView === 'preferences' && <Preferences />}
          {activeView === 'ai' && <AISuggestions />}
        </main>
      </div>
    </div>;
}