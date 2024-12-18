import './card.css'

function CardBody(data){
    

    return(
        <div className="main_body">
            <div className="image_part">
                <img src={data.data.image} alt="" />
            </div>
            <div className="name_part">
                {data.data.name}
            </div>
            <div className="desc_part">
                {data.data.description}
            </div>
        </div>
    )
}
export default CardBody;