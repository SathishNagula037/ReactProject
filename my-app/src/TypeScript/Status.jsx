import { Heading } from "./Heading"
import { Oscar } from "./Oscar"

type statusProps = {
  status:string
}


export const Status = (props: statusProps) => {
    let message 
    if(props.status === "loading"){
        message = "Loading.."
    } else if(props.status === "success"){
        message = "Data fetched successfully.."
    } else if(props.status === "error"){
        message = "error while fetching the data..."
    }
    return (
        <div>
            <h2>Status -- {message}</h2>
            <Heading>PlaceHolder text</Heading>
           
        </div>
    )
}