
function Preview(props) {
    if (props.personal) {
        return (
            <div className="form">  
                <p>
                    <span> First Name: </span>{props.firstName}
                    <span> Last Name: </span>{props.lastName}
                    <span> Email: </span>{props.email}
                    <span> Phone Number: </span>{props.phoneNumber}
                </p>
                <button onClick={props.onEdit}>Edit</button>
            </div>
        )
    }

    else if (props.education) {
        return (
            <div>
                <p>
                    <span> School Name: </span>{props.schoolName}
                    <span> Degree: </span> <span>{props.degree}'s Degree in {props.major} </span>
                    <span> Start Date: </span>{props.startDate}
                    <span> End Date: </span> {props.endDate}
                </p>
                <button onClick={props.onEdit}>Edit</button>
            </div>
        )

    }

    else if (props.practical) {
        return (
            <div>
                <p>
                    <span> Company Name: </span> {props.companyName}
                    <span> City: </span>{props.city}
                    <span> State: </span>{props.state}
                    <span> Position: </span>{props.position}
                    <span> startDate: </span>{props.startDate}
                    <span> endDate: </span>{props.endDate}
                    <span> Description: </span>{props.description}

                </p>
                <button onClick={props.onEdit}>Edit</button>
            </div>
        )

    }
}

export default Preview;