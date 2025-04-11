
import { useState } from "react";
import Navbar from "@/components/Navbar";
import CategoryFilter from "@/components/CategoryFilter";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const filteredProperties = selectedCategory === "all" 
    ? properties 
    : properties.filter(property => property.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="container mx-auto px-4">
          <div className="sticky top-20 pt-4 bg-white z-10">
            <CategoryFilter onSelectCategory={setSelectedCategory} />
          </div>
          
          <div className="py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                id={property.id}
                title={property.title}
                location={property.location}
                price={property.price}
                rating={property.rating}
                images={property.images}
                dates="May 6-11"
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
