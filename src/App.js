import React, { useEffect, useLayoutEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";

import AOS  from "aos";
import "aos/dist/aos.css";
function App() {
	useLayoutEffect(() => {
		window.scrollTo(0, 0);

	},[]);

	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: false,
			mirror: true,
			anchorPlacement: 'bottom-bottom',
      disable:'mobile'
		});
	}, []);

	useEffect(() => {
		if (AOS) {
			AOS.refresh();
		}
	});
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
