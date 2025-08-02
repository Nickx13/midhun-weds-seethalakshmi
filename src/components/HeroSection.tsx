import { Heart } from "lucide-react";
import heroImage from "@/assets/wedding-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/lovable-uploads/bg.jpeg)` }}
      />
      
      {/* Elegant Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-wedding-cream/50 via-stone-500/30 to-stone-600/40" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-8 h-8 bg-wedding-lavender/30 rounded-full float" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-wedding-sage/40 rounded-full float rotate-slow" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-20 w-4 h-4 bg-wedding-gold/50 rounded-full float sway" style={{ animationDelay: '2s' }} />
      <div className="absolute top-60 left-1/4 w-3 h-3 bg-wedding-blush/40 rounded-full float" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-20 right-1/3 w-5 h-5 bg-wedding-lavender/20 rounded-full float" style={{ animationDelay: '4s' }} />
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="fade-in-up">
          {/* Heart with white outline */}
          <div className="relative inline-block mx-auto mb-6 p-6"> {/* Added p-6 */}
  <Heart className="w-12 h-12 text-white absolute scale-[2] pulse-heart drop-shadow-lg" />
  <Heart className="w-12 h-12 text-wedding-blush relative pulse-heart drop-shadow-lg" />
</div>
          
          <h1 className="font-dancing text-6xl md:text-8xl lg:text-9xl text-white mb-4 leading-tight drop-shadow-2xl">
            Midhun
            <span className="text-wedding-blush"> & </span>
            Seethalakshmi
          </h1>
        </div>
        
        <div className="fade-in-up-delayed">
          <p className="font-poppins text-2xl md:text-3xl text-white/90 mb-8 font-light drop-shadow-lg">
            are getting married
          </p>
          
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-elegant inline-block">
            <p className="font-poppins text-lg md:text-xl text-foreground mb-2">
              Save the Date
            </p>
            <p className="font-dancing text-3xl md:text-4xl text-primary mb-4">
              4th September 2025
            </p>
            <p className="font-poppins text-sm text-muted-foreground">
              We can't wait to celebrate with you!
            </p>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 w-full flex justify-center animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center items-center">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
