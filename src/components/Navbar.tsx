
import { Search, User, Globe, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger 
} from "@/components/ui/popover";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 text-primary"
          >
            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75v4.5a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198c.03-.028.061-.056.091-.086L12 5.43z" />
          </svg>
          <span className="ml-2 text-xl font-bold hidden md:block text-primary">airbnb</span>
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex justify-center">
          <Button 
            variant="outline" 
            className="rounded-full border border-gray-200 shadow-sm px-6 py-2 w-80 justify-between"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <span>Anywhere</span>
            <span className="mx-2 text-gray-300">|</span>
            <span>Any week</span>
            <span className="mx-2 text-gray-300">|</span>
            <span className="text-gray-400">Add guests</span>
            <div className="bg-primary rounded-full p-2 text-white ml-2">
              <Search size={16} />
            </div>
          </Button>
        </div>

        {/* User Navigation */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="rounded-full hidden md:flex">
            <span className="text-sm">Become a Host</span>
          </Button>
          <Button variant="ghost" className="rounded-full p-2">
            <Globe size={20} />
          </Button>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="rounded-full flex items-center gap-2 border border-gray-200 p-2">
                <Menu size={18} />
                <User size={18} />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-56" align="end">
              <div className="flex flex-col space-y-1">
                <Button variant="ghost" className="justify-start font-semibold">Sign up</Button>
                <Button variant="ghost" className="justify-start">Log in</Button>
                <hr className="my-1" />
                <Button variant="ghost" className="justify-start">Airbnb your home</Button>
                <Button variant="ghost" className="justify-start">Help</Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
