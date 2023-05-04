import ProjectCard from "../ProjectCard";

const ContentLeft = (props) => {

    const projectCard = props.projectCard;
    //console.log("projectcardleft", projectCard);
    return (

        // <!-- Project Card Example -->
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
            </div>

            <div className="card-body">
            {projectCard.map(({projTitle, finishVal, textVal, colorCode}) => (
                <ProjectCard key = {textVal} projTitle = {projTitle} finishVal={finishVal} textVal={textVal} colorCode={colorCode} />
             ))}
             </div>
        </div>

    )
}
export default ContentLeft;