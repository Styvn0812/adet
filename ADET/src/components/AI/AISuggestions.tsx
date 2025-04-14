import React from 'react';
import { SparklesIcon, CheckIcon, XIcon, ClockIcon, MapPinIcon, CalendarIcon } from 'lucide-react';
export function AISuggestions() {
  const suggestions = [{
    id: 1,
    title: 'Schedule Team Retrospective',
    description: 'Based on your calendar patterns, you should schedule a team retrospective for the completed project.',
    suggestedTime: 'Friday, June 16, 2023 at 3:00 PM',
    duration: '1 hour',
    confidence: 'high'
  }, {
    id: 2,
    title: 'Reschedule Gym Session',
    description: 'Your gym session conflicts with an important meeting. Consider moving it to Thursday evening.',
    suggestedTime: 'Thursday, June 15, 2023 at 6:00 PM',
    duration: '1 hour',
    confidence: 'medium'
  }, {
    id: 3,
    title: 'Book Dentist Appointment',
    description: "It's been 6 months since your last dental checkup. You have free time next Tuesday morning.",
    suggestedTime: 'Tuesday, June 20, 2023 at 10:00 AM',
    duration: '45 minutes',
    confidence: 'low'
  }];
  const getConfidenceBadge = (confidence: string) => {
    switch (confidence) {
      case 'high':
        return <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
            High Confidence
          </span>;
      case 'medium':
        return <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
            Medium Confidence
          </span>;
      case 'low':
        return <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">
            Low Confidence
          </span>;
      default:
        return null;
    }
  };
  return <div className="max-w-3xl mx-auto">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg shadow-lg p-6 mb-6">
        <div className="flex items-center">
          <div className="bg-white rounded-full p-2 mr-4">
            <SparklesIcon className="h-6 w-6 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">
              AI Smart Scheduling
            </h2>
            <p className="text-indigo-100">
              Your personalized schedule recommendations based on your habits
              and preferences
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        {suggestions.map(suggestion => <div key={suggestion.id} className="bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-medium text-gray-900">
                {suggestion.title}
              </h3>
              {getConfidenceBadge(suggestion.confidence)}
            </div>
            <p className="mt-2 text-gray-600">{suggestion.description}</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="flex items-center text-sm text-gray-500">
                <ClockIcon className="h-4 w-4 mr-1" />
                {suggestion.duration}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <CalendarIcon className="h-4 w-4 mr-1" />
                {suggestion.suggestedTime}
              </div>
            </div>
            <div className="mt-4 flex justify-end space-x-3">
              <button className="flex items-center px-3 py-1.5 border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50">
                <XIcon className="h-4 w-4 mr-1 text-gray-500" />
                Decline
              </button>
              <button className="flex items-center px-3 py-1.5 border border-transparent rounded text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                <CheckIcon className="h-4 w-4 mr-1" />
                Accept
              </button>
              <button className="flex items-center px-3 py-1.5 border border-indigo-300 rounded text-sm font-medium text-indigo-600 hover:bg-indigo-50">
                Modify
              </button>
            </div>
          </div>)}
      </div>
      <div className="mt-6 text-center">
        <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
          Show More Suggestions
        </button>
      </div>
    </div>;
}