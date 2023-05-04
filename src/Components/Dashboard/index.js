import './dashboard.css';
import DashboardHeader from '../DashboardHeader';
import DashboardHeading from '../DashboardHeading';
import CardLayout from '../CardLayout';
import ContentLeft from '../ContentLeft'; 
import Footer from '../Footer';
import ColorCard from '../ColorCard';
import ContentRight from '../ContentRight';

const Dashboard = (props) => { 
    const  cardDetails  = props.cardDetails; 
    const colorCard = props.colorCard;

   // console.log("dashboard", cardDetails);
    return(
        <div className='dash-wrapper'>

            <DashboardHeader /> 
            <DashboardHeading cardDetails = {cardDetails} setCardDetails={props.setCardDetails} />
            <CardLayout  cardDetails = {cardDetails} setCardDetails={props.setCardDetails} /> 

         <div className='container-fluid content-wrapper'>
            
            {/* <!-- Content Row --> */} 
            <div className="row content-wrapper">
              {/* <!-- Content Column Left--> */}
                <div className="col-lg-6 mb-4"> 
                <ContentLeft projectCard = {props.projectCard} /> 
                    {/* <!-- Color System --> */}
                    <div className="row"> 
                    {colorCard.map(({cardClass, label, colorVal}) => (
                     <ColorCard key = {label} cardClass = {cardClass} label={label} colorVal={colorVal} />
                    ))}                              
                    </div>
                </div>    
                {/* <!-- Content Column Right--> */}             
                <ContentRight />                   
            </div>
         </div>
        <Footer />
        </div>
    )
}
export default Dashboard;