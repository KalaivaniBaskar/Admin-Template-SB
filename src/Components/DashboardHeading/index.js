import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons'


const DashboardHeading =  (props) => {
    var cardDetails = props.cardDetails;
    const setCardDetails = props.setCardDetails;

    const handleValue = (e) => { 
        const sel = document.querySelector('#sel')
        var option = sel.value;
        //console.log(option); 
        option = Number(option); 
        var ip = document.querySelector('#card-ip')
        var ipval = ip.value 
        //console.log(ip, ipval);
        var copy = [...cardDetails]
        copy[option] = { ...copy[option], value: ipval}
        setCardDetails([...copy]) ;
     }

    return (
        <div className= "container-fluid "> 
                <div className="d-sm-flex align-items-center justify-content-between mb-4 title-container">
                        <h1 className="h3 mb-0 text-gray-800" style={{color: '#5A5C69' }}>Dashboard</h1> 
                        <select id="sel">
                            <option id="" name="card" value="0">Earnings Monthly</option>
                            <option id="" name="card" value="1">Earnings Annual</option>
                            <option id="" name="card" value="2">Tasks completion</option>
                            <option id="" name="card" value="3">Pending Requests</option>
                        </select>
                        <input type='text' id="card-ip"></input> 
                        <button className='btn btn-primary' onClick={handleValue} >Enter value</button>
                        <a href="/" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                        <FontAwesomeIcon icon={faDownload} /> Generate Report</a>
                    </div>
            </div>
    )
}
export default DashboardHeading;