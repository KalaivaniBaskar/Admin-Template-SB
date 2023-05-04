import Wrapper from './Components/Wrapper';
import './App.css';
import { useState } from 'react';
function App() {
 
  const [cardDetails, setCardDetails] = useState([
    {title: "Earnings (Monthly)", 
     value: "$50,000" ,
     cardColor: "#4e73df",
     pFlag : false,
     iconName: "fa-solid fa-calendar fa-2xl"  
    },

     {title: "Earnings (Annual)", 
     value: "$550,000" ,
     cardColor: "#1cc88a",
     pFlag : false,
     iconName: "fa-solid fa-dollar-sign fa-2xl"  
    }, 

     {title: "Tasks", 
     value: "75%" ,
     cardColor: "#36b9cc",
     pFlag : true,
     iconName: "fa-solid fa-clipboard-list fa-2xl"
    },

    {title: "Pending Requests", 
     value: "11" ,
     cardColor: "#f6c23e",
     pFlag : false,
     iconName: "fa-solid fa-comments fa-2xl"
    }
  ]);

  const projectCard = [
    {projTitle: "Server Migration", finishVal: "20", textVal: "20%", colorCode: "progress-bar bg-danger"},
    {projTitle: "Sales Tracking", finishVal: "40", textVal: "40%", colorCode: "progress-bar bg-warning" },
    {projTitle: "Customer Database", finishVal: "60", textVal: "60%",colorCode: "progress-bar" },
    {projTitle: "Payout Details", finishVal: "80", textVal: "80%", colorCode: "progress-bar  bg-info" },
    {projTitle: "Account Setup", finishVal: "100", textVal: "Complete!", colorCode: "progress-bar bg-success" }
  ] 

  const colorCard = [
    { cardClass: "bg-primary", label: "Primary", colorVal: "#4e73df" },
    { cardClass: "bg-success", label: "Success", colorVal: "#1cc88a" },
    { cardClass: "bg-info", label: "Info", colorVal: "#36b9cc" },
    { cardClass: "bg-warning", label: "Warning", colorVal: "#f6c23e" },
    { cardClass: "bg-danger", label: "Danger", colorVal: "##e74a3b" },
    { cardClass: "bg-secondary", label: "Secondary", colorVal: "#858796" },
    { cardClass: "bg-light", label: "Light", colorVal: "#f8f9fc" },
    { cardClass: "bg-dark ", label: "Dark", colorVal: "#5a5c69" }
  ]
  return (
    <div className="App">
      < Wrapper cardDetails = {cardDetails} setCardDetails={setCardDetails} projectCard = {projectCard} colorCard = {colorCard}/>
    </div>
  );
}

export default App;
