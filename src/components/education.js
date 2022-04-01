import React, { useState } from 'react'

function Education(props) {

    const [educationInfo, setAllInfo] = useState({
            schoolName: '',
            degree: '',
            major: '',
            startDate: '',
            endDate: '',
            })

    const handleChange = (e) => {
        setAllInfo( prevValues => {
            return {...prevValues, [e.target.name]: e.target.value}
        })
    }  //https://reactjs.org/docs/hooks-reference.html#functional-updates

    return(
        <form>
            <input
                name='schoolName'
                type='text'
                placeholder='School Name'
                onChange={handleChange}
                value={educationInfo.schoolName}
                />
            <select
                name='degree'
                onChange={handleChange}
                value={educationInfo.degree}>
                <option>Associate</option>
                <option>Bachelor</option>
                <option>Master</option>
                <option>Doctoral</option>
                <option>Certificate</option>
                <option>License</option>
            </select>
            <input
                name='major'
                type='text'
                placeholder='Major'
                onChange={handleChange}
                value={educationInfo.major}
                />
            <input
                name='startDate'
                type='date'
                placeholder='Start Date'
                onChange={handleChange}
                value={educationInfo.startDate}
                />
            <input
                name='endDate'
                type='date'
                placeholder='End Date'
                onChange={handleChange}
                value={educationInfo.endDate}
                />
        </form>
    )
}

export default Education;