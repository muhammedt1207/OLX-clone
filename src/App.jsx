import React from "react";

import CategoryNav from './Components/CategoryNav'
import NavBar from './Components/NavBar'
import { DataProvider } from "./Context/DataContext";
import LastSearch from "./Components/LastSearch";
import FreshRecommendation from "./Components/FreshRecommendation";
import AppIntro from "./Components/AppIntro";
import Footer from "./Components/Footer";


function App() {
  
console.log('.................');
  return (
    <>
      <NavBar/>
      <div className='mt-16'>

      <CategoryNav/>
      <DataProvider>
        <LastSearch/> 
          <FreshRecommendation/>
          </DataProvider>
          <AppIntro/>
          <Footer/>
      </div>
    </>
  )
}

export default App
