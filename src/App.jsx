import { useState } from "react";
import Loader from "./components/Loader";
import MainContent from "./components/MainContent";
import Header from "./components/Header";

import CarContaint from "./components/CarContaint";
// import ScrollStack from "./components/ScrollStack";
// import { ScrollStackItem } from "./components/ScrollStack";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <div>
          <Header />
          <MainContent />
          
          <CarContaint />
          
        </div>
      )}
    </>
  );
}
