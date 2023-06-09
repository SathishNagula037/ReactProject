type CandidateProps = {
    name:{
        first:string,
        last: string
    }
}

export const Candidate = (props: CandidateProps) => {


    return (
        <div>{props.name.first} {props.name.last}</div>
    )
}