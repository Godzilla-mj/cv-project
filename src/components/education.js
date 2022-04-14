import React, { useState } from 'react'
import Preview from './preview'

const Education = (props) => {
    console.log(props)

    const [educationInfo, setAllInfo] = useState({
            education: true, //preview use only
            schoolName: '',
            degree: '',
            major: '',
            startDate: '',
            endDate: '',
            })

    const [changeState, setChangeState] = useState(true)

    const handleChange = (e) => {
        setAllInfo( (prevValues) => {
            return {...prevValues, [e.target.name]: e.target.value}
        })
    }

    const onSubmitForm = (e) => {
        e.preventDefault()
        setChangeState(prevMode => !prevMode)
    }

    const { education, schoolName, degree, major, startDate, endDate} = educationInfo
    
    if(!changeState) {
        return (
            <Preview
                education={education}
                schoolName={schoolName}
                degree={degree}
                major={major}
                startDate={startDate}
                endDate={endDate}
                onEdit={onSubmitForm}
            />
        )
    }

    return(
        <form className='form education'>
            <label className='item'>
                School Name:
                <input
                    name='schoolName'
                    className='input'
                    type='text'
                    placeholder='School Name'
                    onChange={handleChange}
                    value={educationInfo.schoolName}
                    />
            </label>
            <label className='item'>
                Degree:
                <select
                    name='degree'
                    className='input'
                    onChange={handleChange}
                    value={educationInfo.degree}>
                    <option>Associate</option>
                    <option>Bachelor</option>
                    <option>Master</option>
                    <option>Doctoral</option>
                    <option>Certificate</option>
                    <option>License</option>
                    </select>
            </label>
            <label className='item'>
                Major:
                <input
                    name='major'
                    className='input'
                    type='text'
                    placeholder='Major'
                    onChange={handleChange}
                    value={educationInfo.major}
                    />
            </label>
            <label className='item'>
                Start Date:
                <input
                    name='startDate'
                    className='input'
                    type='date'
                    placeholder='Start Date'
                    onChange={handleChange}
                    value={educationInfo.startDate}
                    />
            </label>
            <label className='item'>
                End Date:
                <input
                    name='endDate'
                    className='input'
                    type='date'
                    placeholder='End Date'
                    onChange={handleChange}
                    value={educationInfo.endDate}
                    />
            </label>
            <button type='submit' onClick={onSubmitForm}>
                Save
                </button>
        </form>
    )
}

export default Education;