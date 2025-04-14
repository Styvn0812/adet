import React from 'react';
interface CalendarViewProps {
  type: string;
}
export function CalendarView({
  type
}: CalendarViewProps) {
  // Sample data for demonstration
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const hours = Array.from({
    length: 12
  }, (_, i) => `${i + 8}:00`);
  const events = [{
    id: 1,
    title: 'Team Meeting',
    day: 2,
    time: '10:00',
    duration: 1,
    priority: 'high',
    category: 'work'
  }, {
    id: 2,
    title: 'Lunch with Client',
    day: 4,
    time: '12:00',
    duration: 2,
    priority: 'medium',
    category: 'work'
  }, {
    id: 3,
    title: 'Gym',
    day: 1,
    time: '17:00',
    duration: 1,
    priority: 'low',
    category: 'personal'
  }, {
    id: 4,
    title: 'Doctor Appointment',
    day: 5,
    time: '14:00',
    duration: 1,
    priority: 'high',
    category: 'personal'
  }];
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 border-red-300 text-red-800';
      case 'medium':
        return 'bg-yellow-100 border-yellow-300 text-yellow-800';
      case 'low':
        return 'bg-green-100 border-green-300 text-green-800';
      default:
        return 'bg-blue-100 border-blue-300 text-blue-800';
    }
  };
  if (type === 'month') {
    // Generate a 5x7 grid for month view
    const daysInMonth = Array.from({
      length: 35
    }, (_, i) => i - 3); // Offset to show previous month days
    return <div className="bg-white rounded-lg shadow">
        <div className="grid grid-cols-7 gap-px border-b">
          {days.map(day => <div key={day} className="py-2 text-center text-sm font-medium text-gray-500">
              {day}
            </div>)}
        </div>
        <div className="grid grid-cols-7 grid-rows-5 gap-px bg-gray-200">
          {daysInMonth.map((day, index) => <div key={index} className={`min-h-[100px] bg-white p-1 ${day <= 0 || day > 30 ? 'text-gray-400' : ''}`}>
              <div className="text-right text-sm p-1">
                {day <= 0 ? 31 + day : day > 30 ? day - 30 : day}
              </div>
              {day === 15 && <div className="mt-1 px-2 py-1 text-xs rounded border bg-blue-100 border-blue-300 text-blue-800">
                  3:00 PM - Project Review
                </div>}
              {day === 18 && <div className="mt-1 px-2 py-1 text-xs rounded border bg-purple-100 border-purple-300 text-purple-800">
                  All Day - Conference
                </div>}
              {day === 22 && <div className="mt-1 px-2 py-1 text-xs rounded border bg-red-100 border-red-300 text-red-800">
                  10:00 AM - Client Call
                </div>}
            </div>)}
        </div>
      </div>;
  }
  // Week view
  return <div className="bg-white rounded-lg shadow">
      <div className="grid grid-cols-8 border-b">
        <div className="border-r p-2"></div>
        {days.map((day, index) => <div key={day} className="p-2 text-center">
            <div className="text-sm font-medium text-gray-500">{day}</div>
            <div className="text-xl font-semibold">{index + 10}</div>
          </div>)}
      </div>
      <div className="grid grid-cols-8">
        <div className="border-r">
          {hours.map(hour => <div key={hour} className="h-20 border-b p-1 text-xs text-gray-500">
              {hour}
            </div>)}
        </div>
        {Array.from({
        length: 7
      }, (_, dayIndex) => <div key={dayIndex} className="relative">
              {hours.map((_, hourIndex) => <div key={hourIndex} className="h-20 border-b border-r"></div>)}
              {events.filter(event => event.day === dayIndex).map(event => {
          const hourIndex = parseInt(event.time.split(':')[0]) - 8;
          const top = hourIndex * 80; // 80px per hour
          return <div key={event.id} className={`absolute w-[95%] px-2 py-1 rounded border ${getPriorityColor(event.priority)}`} style={{
            top: `${top}px`,
            height: `${event.duration * 80 - 4}px`
          }}>
                      <div className="text-xs font-semibold">
                        {event.time} - {event.title}
                      </div>
                    </div>;
        })}
            </div>)}
      </div>
    </div>;
}