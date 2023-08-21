export default function Button(props){
    if(props.className === "black"){
        return (
            <button style={props.style} className="border-2 border-black p-4">{props.id + " - " +  props.name}</button>
        )
    } else{
        return (
            <button style={props.style} className="border-2 border-black p-4">{props.id + " - " +  props.name}</button>
        )
    }
    
}