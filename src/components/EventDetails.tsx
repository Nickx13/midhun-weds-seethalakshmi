import { Calendar, Clock, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const EventDetails = () => {
  const events = [
    {
      title: "Wedding Ceremony",
      date: "4th September 2025",
      time: "10:30 AM - 11:30 AM",
      venue: "Moolayil Auditorium",
      address: "Moolayil Auditorium, Ramassery - Pudussery Rd, Kerala",
      description: "Join us as we exchange vows in an intimate ceremony surrounded by our loved ones."
    },
    {
      title: "Reception Celebration",
      date: "8th September 2025",
      time: "3:00 PM - 8:00 PM",
      venue: "Apsara Auditorium", 
      address: "Apsara Auditorium, Vettithitta, Punalur, Kerala",
      description: "Let's dance the night away and celebrate our new beginning together!"
    }
  ];

  const handleGetDirections = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-dancing text-4xl md:text-6xl text-foreground mb-4 fade-in-up">
            When & Where
          </h2>
          <p className="font-poppins text-muted-foreground text-lg max-w-2xl mx-auto fade-in-up-delayed">
            We've planned two special celebrations to share our joy with you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <Card 
              key={event.title}
              className={`p-8 shadow-soft hover:shadow-elegant transition-smooth hover:scale-105 ${
                index === 0 ? 'bg-gradient-romantic fade-in-left' : 'bg-gradient-sunset fade-in-right'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center mb-6">
                <h3 className="font-dancing text-3xl md:text-4xl text-foreground mb-2">
                  {event.title}
                </h3>
                <p className="font-poppins text-muted-foreground">
                  {event.description}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-poppins text-foreground">{event.date}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-poppins text-foreground">{event.time}</span>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-poppins text-foreground font-medium">{event.venue}</p>
                    <p className="font-poppins text-muted-foreground text-sm">{event.address}</p>
                  </div>
                </div>

                <Button 
                  onClick={() => handleGetDirections(event.address)}
                  className="w-full mt-6 bg-card hover:bg-card/80 text-foreground border border-primary/20 hover:border-primary/40 transition-smooth"
                  variant="outline"
                >
                  Get Directions
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetails;