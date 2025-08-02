import HeroSection from "@/components/HeroSection";
import CountdownTimer from "@/components/CountdownTimer";
import EventDetails from "@/components/EventDetails";
import OurStory from "@/components/OurStory";
import Gallery from "@/components/Gallery";
import VenueMap from "@/components/VenueMap";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      
      <main>
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="countdown">
          <CountdownTimer />
        </section>
        
        
        <section id="story">
          <OurStory />
        </section>

        <section id="gallery">
          <Gallery />
        </section>

        <section id="map">
          <VenueMap />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="relative py-16 px-4 bg-gradient-to-br from-wedding-blush/30 via-wedding-cream/50 to-wedding-lavender/30 bg-pattern-hearts overflow-hidden">
        {/* Floating decorative elements */}
        <div className="absolute top-8 left-8 text-xl opacity-40 rotate-12 float">💝</div>
        <div className="absolute top-12 right-8 text-lg opacity-50 -rotate-6 sway">🌟</div>
        <div className="absolute bottom-8 left-12 text-sm opacity-30 rotate-45 pulse">💕</div>
        <div className="absolute bottom-12 right-12 text-lg opacity-40 -rotate-12 float">🎊</div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 shadow-elegant border border-primary/10">
            <div className="mb-6">
              <p className="font-dancing text-4xl text-foreground mb-2 drop-shadow-lg">
                Midhun<span className="text-wedding-blush"> & </span>Seethalakshmi
              </p>
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-primary"></div>
                <span className="text-2xl">💍</span>
                <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-primary"></div>
              </div>
            </div>
            
            <p className="font-poppins text-muted-foreground text-lg mb-4">
              September 4th, 2025
            </p>
            
            <p className="font-poppins text-sm text-muted-foreground italic">
              "Two hearts, one love, forever together" ✨
            </p>
            
            <div className="mt-6 flex justify-center space-x-1">
              <span className="text-sm opacity-60">💐</span>
              <span className="text-xs opacity-40">🌸</span>
              <span className="text-sm opacity-60">💐</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
