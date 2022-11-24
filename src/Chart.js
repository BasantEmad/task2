import { useState } from "react";
import "./App.css";

import LineChart from "./LineChart";

import { UserData } from "./Data";
import Chart from 'chart.js/auto';


function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.name),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.name),
        backgroundColor: [
          "rgba(75,192,192,1)",
        
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  

  return (
    <div className="App">
  
      <div style={{ width: 700 }}>
        <LineChart chartData={userData} />
      </div>
   
    </div>
  );
}

export default App;
