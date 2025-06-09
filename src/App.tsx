import PropertyModal from "./Components/PropertyModal";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import FeaturedProperties from "./Components/FeaturedProperties";
import { useState } from "react";

function App() {

  const [selectedProperty, setSelectedProperty] = useState(null);

  return(
        <div className="win-h-screen w-full bg-gray-50">
          <Home />
          

          <FeaturedProperties setSelectedProperty={setSelectedProperty} />

          
          <Contact />


          <Footer />


        {selectedProperty && (
          <PropertyModal properties= {[selectedProperty]} onClose ={() => setSelectedProperty
             (null)}/>
        )}  
        </div>
  );
}   

  export default App;