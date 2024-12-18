import {  useState } from "react"
import {pokemons} from '../data'
import CardBody from "./Card";
import './card.css'
import usePagination from "../customHooks";
function Card(){
    const [cardData,setCardData]=useState(pokemons);
    const [selected,setSelected]=useState('')
const {data,next,prev,current}=usePagination(pokemons,1)

    let myData=data()

return (
    <div>
        <div className="select_part">
        <select  onChange={(e)=>setSelected(e.target.value)} >
            {myData.map((el)=>(<option >{selected!=''?selected:el.name}</option>))}
            {
                cardData?.map((el)=>(
                    <option value={el.name}   key={el.id} >{el.name}</option>
                ))
            }
        </select>
        </div>
        {myData?.map((el)=>(
        <div key={el.id}>
                    <CardBody data={el}/>
        </div>
        ))

        }
        <div className="button_part">
        <button disabled={current==1} 
            onClick={()=>prev()} >Prev
        </button>
        <button disabled={current==cardData.length} onClick={()=>{
            next(selected);
            setSelected("")
        }}>Next</button>
        </div>
        

    </div>
)
}
export default Card