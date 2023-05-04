import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBell, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'

const DashboardHeader = () => {
    return ( 

        <nav className="dash-header">
                
        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                    <div className="input-group">
                        <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </div>
                </form>

            <ul className='header-list '>
                <li className='mar'><div><FontAwesomeIcon icon={faBell} size="lg"  style={{color: "#aeb1b2",}}  /></div></li>
                <li className='mar'><div><FontAwesomeIcon icon={faEnvelope} size="lg"   /></div></li>
                <li className='mar'><div className='user-wrap'> Douglas McGee </div></li>
                <li className='mar'><FontAwesomeIcon icon={faUser} size="lg"  /></li>
            </ul>     
            <div>
           
            
            </div>            
            
        </nav>  
       
    ) 
}
export default DashboardHeader;