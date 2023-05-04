const ColorCard = ({cardClass, label, colorVal}) => { 
    const text = cardClass === "bg-light" ? "text-black" : "text-white"
    return (
        <div className="col-lg-6 mb-4">
            <div className = {`card ${cardClass} ${text} shadow`}>
                <div className="card-body">
                    {label}
                    <div className={`${text}-50 small`}>{colorVal}</div>
                </div>
            </div>
    </div>
    )
}
export default ColorCard;