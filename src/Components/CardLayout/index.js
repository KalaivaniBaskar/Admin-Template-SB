import Card from "../Card";
const CardLayout = (props) => {
    const  cardDetails = props.cardDetails;
    
  //  console.log("cardlay", cardDetails);
    
    return (
        <div className='container-fluid card-layout'>
        <div className="row card-row"> 
        {cardDetails.map(({title, value, cardColor, pFlag, iconName}, i) => (
           <Card key = {title} id={`card-${i+1}`} title = {title} value={value} cardColor={cardColor} pFlag={pFlag} iconName={iconName}  />
        ))}
        </div>
        </div>

    )
}
export default CardLayout;