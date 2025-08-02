import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-09-04T11:30:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-dreamy bg-pattern-hearts relative overflow-hidden">
      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 w-8 h-8 bg-wedding-blush/30 rounded-full animate-bounce opacity-70"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-wedding-lavender/40 rounded-full float opacity-60"></div>
      <div className="absolute bottom-20 left-1/4 w-4 h-4 bg-wedding-gold/50 rounded-full sway opacity-80"></div>
      <div className="absolute bottom-40 right-1/3 w-10 h-10 bg-wedding-sage/30 rounded-full pulse opacity-50"></div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="font-dancing text-4xl md:text-6xl text-foreground mb-4 fade-in-up">
          Until We Say "I Do"
        </h2>
        <p className="font-poppins text-muted-foreground mb-12 text-lg fade-in-up-delayed">
          The countdown to our special day
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {timeUnits.map((unit, index) => (
            <Card 
              key={unit.label}
              className="p-6 md:p-8 bg-card/80 backdrop-blur-sm shadow-soft hover:shadow-elegant transition-smooth hover:scale-105 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="font-dancing text-3xl md:text-5xl text-primary mb-2">
                {unit.value.toString().padStart(2, '0')}
              </div>
              <div className="font-poppins text-muted-foreground text-sm md:text-base uppercase tracking-wider">
                {unit.label}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownTimer;