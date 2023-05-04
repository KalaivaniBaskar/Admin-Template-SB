
const Card = ({title, value, cardColor, pFlag, iconName}) => {   
    // console.log(title, value, cardColor, pFlag, iconName);
    return( 
        <>
        {/* <!-- Earnings (Monthly) Card Example --> */}
        <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 py-2" style={{borderLeftColor: `${cardColor}`, borderLeftWidth: '5px'}}>
                <div className="card-body">
                    <div className="row no-gutters align-items-left">
                        <div className="col mr-2">
                            <div className="text-xs font-weight-bold text-primary text-uppercase mb-1" style={{fontSize: '0.7rem', fontWeight: '600', textTransform: 'capitalize' }} >
                                {title} </div> 
                            { (!pFlag) ? <div className="h5 mb-0 font-weight-bold text-gray-800" style={{color: '#5A5C69' }}>{value}</div> 
                                         :  <div className="row no-gutters align-items-center">
                                         <div className="col-auto">
                                         <div className="h5 mb-0 font-weight-bold text-gray-800" style={{color: '#5A5C69' }}>{value}</div>
                                         </div>
                                         <div className="col">
                                             <div className="progress progress-sm mr-2">
                                                 <div className="progress-bar bg-info" role="progressbar"
                                                     style={{width: value }} aria-valuenow={value.substr(0,value.length)} aria-valuemin="0"
                                                     aria-valuemax="100"></div>
                                             </div>
                                         </div>
                                     </div>
                            }
                                                   
                        </div>
                        <div className="col-auto"> 
                           <i className= {iconName} style={{color: '#dddfeb' }}></i>  
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )

}
export default Card;