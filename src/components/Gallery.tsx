import { Card } from "@/components/ui/card";

const Gallery = () => {
  // Gallery items with actual photos
  const galleryItems = [
    { 
      id: 1, 
      title: "Beautiful Bride", 
      image: "/lovable-uploads/40ba8507-f265-4908-94f2-8520b3462f57.png",
      description: "Seethalakshmi in traditional elegance"
    },
    { 
      id: 2, 
      title: "Radiant Bride", 
      image: "/lovable-uploads/11692ba4-7b6b-4cc0-8d54-a2af9777808b.png",
      description: "Graceful moments captured"
    },
    { 
      id: 3, 
      title: "Elegant Bride", 
      image: "/lovable-uploads/89614e26-dbbb-4603-aa2b-a6df76977a23.png",
      description: "Seethalakshmi in stunning traditional attire"
    },
    { 
      id: 4, 
      title: "Handsome Groom", 
      image: "/lovable-uploads/1052bab1-d4de-473f-8dcd-a4919c930320.png",
      description: "Midhun looking dapper"
    },
    { 
      id: 5, 
      title: "Charming Groom", 
      image: "/lovable-uploads/87e53705-3e63-44ec-bc9c-2291be297792.png",
      description: "Relaxed and stylish"
    },
    { 
      id: 6, 
      title: "Stylish Groom", 
      image: "/lovable-uploads/3d5f62bb-82fb-4efe-873b-dc3ad0204ded.png",
      description: "Midhun looking cool and confident"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-dreamy bg-pattern-hearts relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-dancing text-4xl md:text-6xl text-foreground mb-4 fade-in-up">
            Our Journey
          </h2>
          <p className="font-poppins text-muted-foreground text-lg fade-in-up-delayed">
            A collection of our favorite moments together
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <Card 
              key={item.id}
              className="group relative overflow-hidden aspect-square bg-gradient-soft shadow-soft hover:shadow-elegant transition-smooth hover:scale-105 cursor-pointer"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInUp 0.8s ease-out forwards',
                opacity: 0,
                transform: 'translateY(30px)'
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-dancing text-xl mb-1">
                    {item.title}
                  </h3>
                  <p className="font-poppins text-sm opacity-90">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-romantic opacity-0 group-hover:opacity-20 transition-smooth" />
              
              {/* Decorative Corner */}
              <div className="absolute top-3 right-3 w-6 h-6 border-2 border-primary/20 rotate-45 opacity-0 group-hover:opacity-100 transition-smooth" />
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-poppins text-muted-foreground italic">
            More beautiful memories coming soon...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;