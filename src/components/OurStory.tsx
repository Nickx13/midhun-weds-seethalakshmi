import { Card } from "@/components/ui/card";

const OurStory = () => {
  return (
    <section className="py-20 px-4 bg-gradient-magical bg-pattern-flowers relative overflow-hidden">
      {/* Floating Hearts - positioned to avoid text overlap */}
      <div className="absolute top-8 left-8 text-2xl opacity-60 rotate-12 float">💕</div>
      <div className="absolute top-12 right-8 text-xl opacity-50 -rotate-12 sway">🌸</div>
      <div className="absolute bottom-8 left-12 text-xl opacity-70 rotate-45 pulse">✨</div>
      <div className="absolute bottom-12 right-12 text-2xl opacity-60 -rotate-6 float">💐</div>
      <div className="absolute top-1/4 left-4 text-lg opacity-40 rotate-6 sway" style={{ animationDelay: '1s' }}>🦋</div>
      <div className="absolute top-3/4 right-4 text-lg opacity-50 -rotate-12 float" style={{ animationDelay: '2s' }}>🌺</div>
      <div className="absolute top-1/2 left-2 text-sm opacity-30 rotate-45 pulse" style={{ animationDelay: '3s' }}>💫</div>
      <div className="absolute bottom-1/4 right-2 text-sm opacity-40 -rotate-6 sway" style={{ animationDelay: '4s' }}>🎀</div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-dancing text-4xl md:text-6xl text-foreground mb-4 fade-in-up">
            Our Story
          </h2>
          <p className="font-poppins text-muted-foreground text-lg fade-in-up-delayed">
            Every love story is beautiful, but ours is our favorite
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-card/80 backdrop-blur-sm shadow-elegant slide-up">
          <div className="prose prose-lg max-w-none">
            <div className="font-poppins text-muted-foreground leading-relaxed space-y-6 text-center">
              <p className="text-lg leading-8">
                It all started with a simple hello that turned into a lifetime of love.
                <br />
                From endless conversations to shared dreams, laughter, and little moments,
                <br />
                We found in each other the calm, the joy, and the forever we looking for.
              </p>
              
              <div className="text-center mt-12">
                <p className="font-dancing text-xl text-primary">
                  Now, we're writing our next chapter together, hand in hand, heart to heart. 💍
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default OurStory;