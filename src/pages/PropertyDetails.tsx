
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { properties } from "@/data/properties";
import Navbar from "@/components/Navbar";

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  
  const property = properties.find(p => p.id === id);
  
  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Property not found</h1>
            <Link to="/" className="text-primary hover:underline">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-1">
        {/* Property Title */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold">{property.title}</h1>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center">
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
                {property.rating}
              </span>
              <span className="mx-2">·</span>
              <span className="text-gray-500 hover:underline">{property.location}, {property.country}</span>
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost" className="text-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M7 11v2a3 3 0 0 0 6 0v-2"/><circle cx="10" cy="5" r="1"/><path d="m21 15-5-6"/><path d="M3 15h18"/><path d="M18 15v4"/><path d="M3 15v4"/><circle cx="18" cy="13" r="1"/></svg>
                Share
              </Button>
              <Button variant="ghost" className="text-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                Save
              </Button>
            </div>
          </div>
        </div>
        
        {/* Property Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
          <div className="col-span-1 md:col-span-1 h-[400px] relative">
            <img 
              src={property.images[selectedImage]} 
              alt={property.title} 
              className="h-full w-full object-cover rounded-l-xl"
            />
          </div>
          <div className="hidden md:grid grid-cols-2 gap-2 h-[400px]">
            {property.images.slice(1, 5).map((image, index) => (
              <div key={index} className="relative">
                <img 
                  src={image} 
                  alt={`${property.title} ${index + 1}`} 
                  className={`h-full w-full object-cover ${
                    index === 1 ? "rounded-tr-xl" : index === 3 ? "rounded-br-xl" : ""
                  }`}
                />
              </div>
            ))}
          </div>
          <Button 
            variant="outline" 
            className="absolute bottom-4 right-4 bg-white"
            onClick={() => {}}
          >
            Show all photos
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="col-span-2">
            {/* Host Information */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-xl font-semibold">
                  {property.title} hosted by {property.host.name}
                </h2>
                <p className="text-gray-600">
                  {property.guests} guests · {property.beds} beds · {property.baths} baths
                </p>
              </div>
              <div className="relative w-14 h-14">
                <img 
                  src={property.host.image} 
                  alt={property.host.name} 
                  className="w-full h-full rounded-full object-cover"
                />
                {property.host.isSuperhost && (
                  <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-primary">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
            
            <Separator className="my-6" />
            
            {/* Property Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 flex">
                <div className="mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>
                </div>
                <div>
                  <h3 className="font-medium">Self check-in</h3>
                  <p className="text-gray-500 text-sm">Check yourself in with the lockbox.</p>
                </div>
              </div>
              
              <div className="p-4 flex">
                <div className="mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>
                </div>
                <div>
                  <h3 className="font-medium">Great location</h3>
                  <p className="text-gray-500 text-sm">95% of recent guests gave the location a 5-star rating.</p>
                </div>
              </div>
              
              <div className="p-4 flex">
                <div className="mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
                </div>
                <div>
                  <h3 className="font-medium">Free cancellation</h3>
                  <p className="text-gray-500 text-sm">Cancel before check-in for a partial refund.</p>
                </div>
              </div>
            </div>
            
            {/* Description */}
            <div className="mb-6">
              <p className="text-gray-700">{property.description}</p>
            </div>
            
            <Separator className="my-6" />
            
            {/* Amenities */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4">What this place offers</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 mr-4"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="mt-4">
                Show all amenities
              </Button>
            </div>
          </div>
          
          {/* Booking Card */}
          <div className="col-span-1">
            <Card className="sticky top-24 shadow-lg">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-xl font-semibold">${property.price}</span>
                    <span className="text-gray-500"> night</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                    <span>{property.rating} · </span>
                    <span className="ml-1 text-gray-500 underline">24 reviews</span>
                  </div>
                </div>
                
                <div className="border rounded-lg overflow-hidden mb-4">
                  <div className="grid grid-cols-2 divide-x">
                    <div className="p-3">
                      <div className="text-xs font-bold">CHECK-IN</div>
                      <div>05/06/2025</div>
                    </div>
                    <div className="p-3">
                      <div className="text-xs font-bold">CHECKOUT</div>
                      <div>05/11/2025</div>
                    </div>
                  </div>
                  <div className="border-t p-3">
                    <div className="text-xs font-bold">GUESTS</div>
                    <div className="flex justify-between">
                      <div>2 guests</div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full mb-4" size="lg">
                  Reserve
                </Button>
                
                <p className="text-center text-gray-500 text-sm mb-6">
                  You won't be charged yet
                </p>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="underline">${property.price} x 5 nights</span>
                    <span>${property.price * 5}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="underline">Cleaning fee</span>
                    <span>$75</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="underline">Service fee</span>
                    <span>$125</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold">
                    <span>Total before taxes</span>
                    <span>${property.price * 5 + 75 + 125}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
