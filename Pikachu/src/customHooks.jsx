import { useState } from "react"

function usePagination(arr,itemsperpage){

    const [first, setFirst]=useState(0)
    const [last,setlast]=useState(itemsperpage);
    const [current,setCurrent]=useState(1)
    function data(){
        return arr.slice(first,last)
       
    }

    function next(name){
        if(name){
            for(let i=0;i<arr.length;i++){
                if(arr[i].name==name){
                    setFirst(i)
                    setlast(i+1)
                    setCurrent(i+1)
                }
            }
        }else{
            setFirst(prev=>prev+itemsperpage)
        setlast(prev=>prev+itemsperpage)
        setCurrent(pre=>pre+1)
        }
        
    }

    function prev(){
        setFirst(prev=>prev-itemsperpage);
        setlast(prev=>prev-itemsperpage)
        setCurrent(pre=>pre-1)
    }

    

    return {data, next,prev,current}
}
export default usePagination


// agility, caring & empathy, problem solving, commitment to excellence