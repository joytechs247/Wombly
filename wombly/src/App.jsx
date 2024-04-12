
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import Homepage from './components/HomePage';
import OvulationTracker from './components/OvulationTracker'
import PeriodTracker from './components/PeriodTracker';
import PregnancyTracker from './components/PregnancyTracker';


function App() {

  return (
    <>
      <BrowserRouter>
              <Header />
              <div className="">
                      <Routes>
                        <Route path="/" element={<Homepage />} />

                        <Route  path="ovulation" element={<OvulationTracker />} />
                        <Route  path="pregnancy" element={<PregnancyTracker />} />
                        <Route  path="period" element={<PeriodTracker />} />
                        {/* <Route  path="womb-gpt" element={<WombGPT />} />
                        <Route  path="community" element={<Community />} />
                        <Route  path="mentor-contact" element={<MentorContact />} /> */}

                        <Route  path="/*" element={<Homepage />} />
                  </Routes>
              </div>
              <Footer/>
            </BrowserRouter>
    </>
  )
}

export default App
