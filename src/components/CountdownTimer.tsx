import React, { useState, useEffect } from 'react';
import { Calendar, Trophy, Clock, Target } from 'lucide-react';

interface CompetitionDate {
  name: string;
  date: Date;
  location: string;
  type: 'worlds' | 'regional' | 'qualifier';
  program: 'VEX' | 'FTC' | 'FRC' | 'MATE ROV';
  color: string;
}

const CountdownTimer: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Competition dates for 2026 season
  const competitions: CompetitionDate[] = [
    {
      name: 'VEX Robotics World Championship',
      date: new Date('2026-04-29'),
      location: 'Dallas, Texas',
      type: 'worlds',
      program: 'VEX',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      name: 'FIRST Championship (Houston)',
      date: new Date('2026-04-16'),
      location: 'Houston, Texas',
      type: 'worlds',
      program: 'FRC',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      name: 'FIRST Championship (Detroit)',
      date: new Date('2026-04-23'),
      location: 'Detroit, Michigan',
      type: 'worlds',
      program: 'FTC',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      name: 'MATE ROV World Championship',
      date: new Date('2026-06-25'),
      location: 'Kingsport, Tennessee',
      type: 'worlds',
      program: 'MATE ROV',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getTimeRemaining = (targetDate: Date) => {
    const now = currentTime.getTime();
    const target = targetDate.getTime();
    const difference = target - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, isExpired: false };
  };

  const getNextCompetition = () => {
    const upcoming = competitions
      .filter(comp => comp.date > currentTime)
      .sort((a, b) => a.date.getTime() - b.date.getTime());
    
    return upcoming.length > 0 ? upcoming[0] : null;
  };

  const nextComp = getNextCompetition();

  if (!nextComp) {
    return (
      <div className="bg-gradient-to-r from-gray-500 to-gray-600 rounded-xl p-6 text-white text-center">
        <Calendar className="h-8 w-8 mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2">Season Complete</h3>
        <p>All 2025 World Championships have concluded. Check back for 2026 dates!</p>
      </div>
    );
  }

  const timeLeft = getTimeRemaining(nextComp.date);

  return (
    <div className={`bg-gradient-to-r ${nextComp.color} rounded-xl p-6 text-white shadow-lg`}>
      <div className="text-center mb-6">
        <div className="flex items-center justify-center mb-2">
          <Trophy className="h-6 w-6 mr-2" />
          <span className="text-sm font-semibold uppercase tracking-wide">Next World Championship</span>
        </div>
        <h3 className="text-2xl font-bold mb-1">{nextComp.name}</h3>
        <p className="text-sm opacity-90">{nextComp.location}</p>
        <p className="text-sm opacity-90">{nextComp.date.toLocaleDateString('en-US', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}</p>
      </div>

      {timeLeft.isExpired ? (
        <div className="text-center">
          <Clock className="h-8 w-8 mx-auto mb-2" />
          <h3 className="text-xl font-bold mb-2">Season Complete</h3>
          <p>All 2026 World Championships have concluded. Check back for 2027 dates!</p>
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-4 text-center">
          <div className="bg-white/20 rounded-lg p-3">
            <div className="text-2xl font-bold">{timeLeft.days}</div>
            <div className="text-xs uppercase tracking-wide">Days</div>
          </div>
          <div className="bg-white/20 rounded-lg p-3">
            <div className="text-2xl font-bold">{timeLeft.hours}</div>
            <div className="text-xs uppercase tracking-wide">Hours</div>
          </div>
          <div className="bg-white/20 rounded-lg p-3">
            <div className="text-2xl font-bold">{timeLeft.minutes}</div>
            <div className="text-xs uppercase tracking-wide">Minutes</div>
          </div>
          <div className="bg-white/20 rounded-lg p-3">
            <div className="text-2xl font-bold">{timeLeft.seconds}</div>
            <div className="text-xs uppercase tracking-wide">Seconds</div>
          </div>
        </div>
      )}

      <div className="mt-6 text-center">
        <div className="flex items-center justify-center text-sm opacity-90">
          <Target className="h-4 w-4 mr-1" />
          <span>Time to prepare for Worlds!</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;