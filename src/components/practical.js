import React, { useState } from 'react'

function Practical(props) {

    const [practicalInfo, setAllInfo] = useState({
        companyName: '',
        city: '',
        state: '',
        position: '',
        startDate: '',
        endDate: '',
    })

    const handleChange = (e) => {
        setAllInfo ( prevValues => {
            return {...prevValues, [e.target.name]: e.target.value}
        })
    }  

    return(
        <form>
            <input
                name='companyName'
                type='text'
                placeholder='Company Name'
                value={practicalInfo.companyName}
                />
            <input
                name='city'
                type='text'
                placeholder='City'
                onChange={handleChange}
                value={practicalInfo.city}
                />
            <input
                name='state'
                type='text'
                placeholder='State'
                onChange={handleChange}
                value={practicalInfo.state}
                />
            <input
                name='position'
                type='text'
                placeholder='Position'
                onChange={handleChange}
                value={practicalInfo.position}
                />
            <input
                name='startDate'
                type='date'
                placeholder=''
                onChange={handleChange}
                value={practicalInfo.startDate}
                />
            <input
                name='endDate'
                type='date'
                placeholder=''
                onChange={handleChange}
                value={practicalInfo.endDate}
                />
        </form>
    )
}

export default Practical