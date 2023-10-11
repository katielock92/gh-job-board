import { useParams } from "react-router-dom"


export default function JobPage(){

    let {id} = useParams();

    return(
        <div>
            <h1>Job page! for job {id}</h1>
            {/* Job title */}
            {/* Job description  */}
        </div>
    )
}