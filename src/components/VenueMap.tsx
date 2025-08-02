
import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const VenueMap = () => {
  
  const venues = [
    {
      type: "Wedding Ceremony",
      name: "Moolayil Auditorium",
      address: "Moolayil Auditorium, Ramassery - Pudussery Rd, Kerala",
      date: "4th September 2025",
      time: "10:30 AM - 11:30 AM",
      googleMapsUrl: "https://g.co/kgs/yWskCCw",
      iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.426748605547!2d76.71568557508368!3d10.778590959153664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba86da30fd5d5c3%3A0x5df22c0fd49e4f3d!2sMoolayil%20Auditorium%2C%20Ramassery%20-%20Pudussery%20Rd!5e0!3m2!1sen!2sin!4v1753208128065!5m2!1sen!2sin"
    },
    {
      type: "Reception Celebration", 
      name: "Apsara Auditorium",
      address: "Apsara Auditorium, Vettithitta, Punalur, Kerala",
      date: "8th September 2025",
      time: "3:00 PM - 8:00 PM",
      googleMapsUrl: "https://maps.app.goo.gl/vQ9MMvre73s3zrte9",
      iframeSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1008735.338768376!2d76.06108966898665!3d9.029750875564137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b067157db8f1ca5%3A0x758e34f0031d95ff!2sApsara%20Auditorium!5e0!3m2!1sen!2sin!4v1753208019316!5m2!1sen!2sin"
    }
  ];

  const handleGetDirections = (url: string) => {
    window.open(url, '_blank');
  };

  const handleOpenInMaps = (address: string) => {
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <section className="py-20 px-4 bg-gradient-petals bg-pattern-flowers relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-dancing text-4xl md:text-6xl text-foreground mb-4 fade-in-up">
            Find Us Here
          </h2>
          <p className="font-poppins text-muted-foreground text-lg fade-in-up-delayed">
            We can't wait to celebrate with you at this beautiful venue
          </p>
        </div>

        <div className="grid gap-12">
          {venues.map((venue, index) => (
            <div key={venue.type} className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Venue Information */}
              <Card className={`p-8 bg-card/80 backdrop-blur-sm shadow-elegant ${index === 0 ? 'fade-in-left' : 'fade-in-right'}`}>
                <div className="text-center mb-6">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-4 pulse-heart" />
                  <h3 className="font-dancing text-3xl text-foreground mb-2">
                    {venue.type}
                  </h3>
                  <h4 className="font-poppins text-xl text-foreground mb-2">
                    {venue.name}
                  </h4>
                  <p className="font-poppins text-muted-foreground mb-3">
                    {venue.address}
                  </p>
                  <div className="bg-primary/10 rounded-lg p-4 mb-4">
                    <p className="font-dancing text-xl text-primary mb-1">
                      {venue.date}
                    </p>
                    <p className="font-poppins text-sm text-primary/80">
                      {venue.time}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button 
                    onClick={() => handleGetDirections(venue.googleMapsUrl)}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                  
                  <Button 
                    onClick={() => handleOpenInMaps(venue.address)}
                    variant="outline"
                    className="w-full border-primary/20 hover:border-primary/40 transition-smooth"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Open in Google Maps
                  </Button>
                </div>

              </Card>

              {/* Map Embed */}
              <Card className={`overflow-hidden shadow-elegant ${index === 0 ? 'fade-in-right' : 'fade-in-left'}`}>
                <div className="relative aspect-[4/3]">
                  <iframe
                    src={venue.iframeSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`${venue.name} Location`}
                    className="absolute inset-0"
                  />
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Additional Location Info */}
        <div className="mt-12 text-center">
          <Card className="inline-block p-6 bg-card/60 backdrop-blur-sm shadow-soft slide-up">
            <p className="font-poppins text-muted-foreground mb-2">
              Need help finding us? Call us at
            </p>
            <div className="font-dancing text-xl text-primary space-x-2">
              <a href="tel:9539545243" className="hover:text-primary/80 transition-colors underline decoration-primary/30 hover:decoration-primary">
                9539545243
              </a>
              <span>/</span>
              <a href="tel:9846625944" className="hover:text-primary/80 transition-colors underline decoration-primary/30 hover:decoration-primary">
                9846625944
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VenueMap;