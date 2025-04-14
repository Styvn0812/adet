import React from 'react';
import { BellIcon, ClockIcon, SunIcon, CalendarIcon } from 'lucide-react';
export function Preferences() {
  return <div className="max-w-3xl mx-auto bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          Preferences
        </h2>
        <div className="space-y-8">
          {/* Notification Settings */}
          <section>
            <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
              <BellIcon className="h-5 w-5 mr-2 text-indigo-500" />
              Notification Settings
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-700">
                    Email Notifications
                  </h4>
                  <p className="text-xs text-gray-500">
                    Receive email reminders for upcoming events
                  </p>
                </div>
                <div className="relative inline-block w-10 mr-2 align-middle select-none">
                  <input type="checkbox" id="email-notifications" defaultChecked className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                  <label htmlFor="email-notifications" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-700">
                    Push Notifications
                  </h4>
                  <p className="text-xs text-gray-500">
                    Receive push notifications for upcoming events
                  </p>
                </div>
                <div className="relative inline-block w-10 mr-2 align-middle select-none">
                  <input type="checkbox" id="push-notifications" defaultChecked className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                  <label htmlFor="push-notifications" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-700">
                    Notification Timing
                  </h4>
                  <p className="text-xs text-gray-500">
                    When to send reminders before events
                  </p>
                </div>
                <select className="mt-1 block w-40 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                  <option>15 minutes</option>
                  <option>30 minutes</option>
                  <option>1 hour</option>
                  <option>1 day</option>
                </select>
              </div>
            </div>
          </section>
          {/* Time Settings */}
          <section>
            <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
              <ClockIcon className="h-5 w-5 mr-2 text-indigo-500" />
              Time Settings
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-700">
                    Timezone
                  </h4>
                  <p className="text-xs text-gray-500">
                    Set your local timezone
                  </p>
                </div>
                <select className="mt-1 block w-48 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                  <option>Eastern Time (ET)</option>
                  <option>Central Time (CT)</option>
                  <option>Mountain Time (MT)</option>
                  <option>Pacific Time (PT)</option>
                  <option>UTC</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-700">
                    Start of Week
                  </h4>
                  <p className="text-xs text-gray-500">
                    First day of the week in calendar view
                  </p>
                </div>
                <select className="mt-1 block w-32 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                  <option>Sunday</option>
                  <option>Monday</option>
                </select>
              </div>
            </div>
          </section>
          {/* Display Settings */}
          <section>
            <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
              <SunIcon className="h-5 w-5 mr-2 text-indigo-500" />
              Display Settings
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-700">Theme</h4>
                  <p className="text-xs text-gray-500">
                    Choose your preferred theme
                  </p>
                </div>
                <select className="mt-1 block w-32 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                  <option>Light</option>
                  <option>Dark</option>
                  <option>System</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-700">
                    Default Calendar View
                  </h4>
                  <p className="text-xs text-gray-500">
                    Choose your default calendar view
                  </p>
                </div>
                <select className="mt-1 block w-32 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                  <option>Month</option>
                  <option>Week</option>
                  <option>Day</option>
                </select>
              </div>
            </div>
          </section>
          {/* Working Hours */}
          <section>
            <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
              <CalendarIcon className="h-5 w-5 mr-2 text-indigo-500" />
              Working Hours
            </h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="start-time" className="block text-sm font-medium text-gray-700">
                    Start Time
                  </label>
                  <select id="start-time" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                    <option>8:00 AM</option>
                    <option>9:00 AM</option>
                    <option>10:00 AM</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="end-time" className="block text-sm font-medium text-gray-700">
                    End Time
                  </label>
                  <select id="end-time" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                    <option>5:00 PM</option>
                    <option>6:00 PM</option>
                    <option>7:00 PM</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Working Days
                </label>
                <div className="flex flex-wrap gap-2">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, index) => <label key={day} className="flex items-center">
                        <input type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked={index < 5} // Mon-Fri checked by default
                  />
                        <span className="ml-2 text-sm text-gray-700">
                          {day}
                        </span>
                      </label>)}
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="mt-8 flex justify-end">
          <button type="button" className="mr-3 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Cancel
          </button>
          <button type="submit" className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Save Preferences
          </button>
        </div>
      </div>
    </div>;
}