import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardMainContent from "./components/DashboardMainContent";
import { useState } from "react";


function App() {
  const [open,setOpen]=useState(false)
  return (
    <div className="flex">
      <Sidebar open={open} setOpen={setOpen}/>
      <div className="flex-1">
        <Header open={open} setOpen={setOpen}/>
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;
