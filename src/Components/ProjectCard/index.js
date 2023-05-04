const ProjectCard = ({projTitle ,finishVal, textVal, colorCode}) => {
   
    return (
        <>
                <h4 className="small font-weight-bold">{projTitle} 
                <span className="float-right">{textVal}</span></h4>
                <div className="progress mb-4">
                    <div className={colorCode} role="progressbar" style={{width: `${finishVal}%`}}
                        aria-valuenow={finishVal} aria-valuemin="0" aria-valuemax="100"></div>
                </div>
        </>
    )
}
export default ProjectCard;