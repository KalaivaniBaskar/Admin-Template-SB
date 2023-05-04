
import './wrapper.css'
import Sidebar from '../Sidebar';
import Dashboard from '../Dashboard';

const Wrapper = (props) => {
    return(
        <div className="wrapper">
            <Sidebar/>
            <Dashboard cardDetails = {props.cardDetails} setCardDetails={props.setCardDetails} projectCard = {props.projectCard} colorCard = {props.colorCard} />
            
        </div>
    )
}
export default Wrapper;