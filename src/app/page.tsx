import Delivery from "@/components/Delivery";
import Details from "@/components/Details/Details";
import FeaturedRestaurants from "@/components/FeaturedRestaurants/FeaturedRestaurants";
import Footer from "@/components/Footer";
import Guidance from "@/components/Guidance/Guidance";
import Install from "@/components/Install/Install";
import Items from "@/components/Items/Items";
import Navbar from "@/components/Navbar";
import Offer from "@/components/Offer/Offer";
import Ready from "@/components/Ready";
import Search from "@/components/Search/Search";

export default function Home() {
  return (
    <main className="w-full" >
      <Navbar/>
      <Delivery/>
      <Offer/>
      <Guidance/>
      <Items/>
      <FeaturedRestaurants/>
      <Search/>
      <Install/>
      <Details/>
      <Ready/>
      <Footer/>
    </main>
  );
}
