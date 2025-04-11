
import { Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { Link } from "react-router-dom";

export interface PropertyProps {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  images: string[];
  dates?: string;
}

const PropertyCard = ({ 
  id, 
  title, 
  location, 
  price, 
  rating, 
  images, 
  dates 
}: PropertyProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <Link to={`/property/${id}`}>
      <Card className="group border-none overflow-hidden">
        <div className="relative aspect-square overflow-hidden rounded-xl">
          <img 
            src={images[currentImage]} 
            alt={title} 
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" 
          />
          
          {/* Image Navigation */}
          {images.length > 1 && (
            <>
              <button 
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1 opacity-0 shadow-md transition-opacity group-hover:opacity-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              <button 
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1 opacity-0 shadow-md transition-opacity group-hover:opacity-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </>
          )}
          
          {/* Favorite Button */}
          <button 
            onClick={toggleFavorite}
            className="absolute right-2 top-2 z-10"
          >
            <Heart 
              size={24} 
              className={isFavorite ? "fill-primary text-primary" : "text-white stroke-2"} 
            />
          </button>
          
          {/* Image Dots */}
          {images.length > 1 && (
            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
              {images.map((_, index) => (
                <span
                  key={index}
                  className={`block h-1.5 w-1.5 rounded-full ${
                    currentImage === index ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
        
        <CardContent className="p-2 pt-3">
          <div className="flex justify-between">
            <h3 className="font-medium text-base">
              {title}
            </h3>
            {rating > 0 && (
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
                <span className="ml-1">{rating.toFixed(1)}</span>
              </div>
            )}
          </div>
          <p className="text-gray-500 text-sm">{location}</p>
          {dates && <p className="text-gray-500 text-sm">{dates}</p>}
          <p className="mt-1 font-semibold">
            ${price} <span className="font-normal">night</span>
          </p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PropertyCard;
