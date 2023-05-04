import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFaceLaughWink,faGaugeHigh,faGear,faScrewdriverWrench,faFolder, faChartArea, faTable, faLessThan} from '@fortawesome/free-solid-svg-icons'
import './sidebar.css'
import {  useState } from 'react';

const Sidebar = () => {
    var [open, setOpen] = useState(false);
    var [openUtil, setOpenUtil] = useState(false);
    var [openPage, setOpenPage] = useState(false);

    return (
        <div className='sidebar'>
        <ul className='bg-gradient-primary ' >
            <li className='brandlogo'>
                <div className="sidebar-brand-icon rotate-n-15">
                <FontAwesomeIcon icon={faFaceLaughWink} size="2xl" style={{color: "#fcfcfc",}}/> 
                </div>
                <div className="sidebar-brand-text mx-3 admintxt"> <b> SB ADMIN <sup>2</sup></b></div>
            </li>
            <hr></hr>
            <li className='listitem'>
                <div className="sidebar-brand-icon ">
                <FontAwesomeIcon icon={faGaugeHigh} />
                <span className="sidebar-dash">  Dashboard</span>
                </div>
                
            </li>
            <hr></hr>
            <li><div className="sidebar-heading">
                INTERFACE
                <br></br>
                <br></br>
            </div> 
            </li>
            <li className='listitem'>
            <button className='button-skin' onClick={ () =>  {setOpen(!open);}}>
            <div className="sidebar-brand-icon ">
                <FontAwesomeIcon icon={faGear} />
                <span className="item" > Components</span>
                </div> 
            </button>
            {open && <section>
                      
                        <div className="sidebar-heading">CUSTOM COMPONENTS</div>
                        <div className="item">Buttons</div>
                        <div className="item">Cards</div>
                       
                        </section> }
                        <br></br>
                        <br></br>
            </li>
            <li className='listitem'>
            <button className='button-skin' onClick={ () =>  {setOpenUtil(!openUtil);}}>
            <div className="sidebar-brand-icon ">
                <FontAwesomeIcon icon={faScrewdriverWrench} />
                <span className="item" >  Utilities</span>
                </div> 
            </button>
            {openUtil && <section>
                      
                        <div className="sidebar-heading">CUSTOM UTILITIES</div>
                        <div className="item">Colors</div>
                        <div className="item">Borders</div>
                        <div className="item">Animations</div>
                        <div className="item">Other</div>
                       
                        </section> }
                        <br></br>
                        <hr></hr>
            </li>
            <li><div className="sidebar-heading">
                ADDONS
                <br></br>
                <br></br>
            </div> 
            </li> 
            <li className='listitem'>
            <button className='button-skin' onClick={ () =>  {setOpenPage(!openPage);}}>
            <div className="sidebar-brand-icon ">
                <FontAwesomeIcon icon={faFolder} />
                <span className="item" >  Pages</span>
                </div> 
            </button>
            {openPage && <section>
                      
                        <div className="sidebar-heading">LOGIN SCREENS</div>
                        <div className="item">Login</div>
                        <div className="item">Register</div>
                        <div className="item">Forgot Password</div>
                        <div className="sidebar-heading">OTHER PAGES</div>
                        <div className="item">404 Page</div>
                        <div className="item">Blank Page</div>
                       
                        </section> }
                        <br></br>
                        <br></br>
            </li>

            <li className='listitem'>
            <button className='button-skin' >
            <div className="sidebar-brand-icon ">
                <FontAwesomeIcon icon={faChartArea} />
                <span className="item" >  Charts</span>
                </div> 
            </button>
        
                        <br></br>
                        <br></br>
            </li>

            <li className='listitem'>
            <button className='button-skin' >
            <div className="sidebar-brand-icon ">
                <FontAwesomeIcon icon={faTable} />
                <span className="item" >  Tables</span>
                </div> 
            </button>
        
                        <br></br>
                        <hr></hr>
            </li>
            <li>
                <div className='icon-wrap'>               
                <button className='round-btn'> <FontAwesomeIcon icon={faLessThan}/> </button>
                </div>
            </li>
         
        </ul> 

        </div>
    )
}
export default Sidebar;