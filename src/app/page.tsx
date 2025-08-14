import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import CustomCursor from "./components/CustomCursor";
import LenisProvider from "./components/LenisProvider";
import ScrollToTop from "./components/ScrollToTop";
import Home from './pages/Home'

const Page = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default Page;
