import React, { useState } from 'react'
import Preview from './preview'

function Practical(props) {

    const [practicalInfo, setAllInfo] = useState({
        practical: true, //preview use only
        companyName: '',
        city: '',
        state: '',
        position: '',
        startDate: '',
        endDate: '',
        description: ''
    })

    const [changeState, setChangeState] = useState(true)

    const handleChange = (e) => {
        setAllInfo ( prevValues => {
            return {...prevValues, [e.target.name]: e.target.value}
        })
    }  

    const onSubmitForm = (e) => {
        e.preventDefault()
        setChangeState(prevMode => !prevMode)
    }

    const { practical, companyName, city, state, position, startDate, endDate, description} = practicalInfo

    if(!changeState) {
        return (
            <Preview
                practical={practical}
                companyName={companyName}
                city={city}
                state={state}
                position={position}
                startDate={startDate}
                endDate={endDate}
                description={description}
                onEdit={onSubmitForm}
                />
        )
    }

    return(
        <form className='form practical'>
            <label className='item'>
                Company Name:
                <input
                    name='companyName'
                    className='input'
                    type='text'
                    placeholder='Company Name'
                    onChange={handleChange}
                    value={practicalInfo.companyName}
                />
                </label>
            <label className='item'>
                City:
                <input
                    name='city'
                    className='input'
                    type='text'
                    placeholder='City'
                    onChange={handleChange}
                    value={practicalInfo.city}
                />
                </label>
            <label className='item'>
                State:
                <input
                    name='state'
                    className='input'
                    type='text'
                    placeholder='State'
                    onChange={handleChange}
                    value={practicalInfo.state}
                />
                </label>
            <label className='item'>
                Position:
                <input
                    name='position'
                    className='input'
                    type='text'
                    placeholder='Position'
                    onChange={handleChange}
                    value={practicalInfo.position}
                />
                </label>
            <label className='item'>
                Start Date:
                <input
                    name='startDate'
                    className='input'
                    type='date'
                    placeholder=''
                    onChange={handleChange}
                    value={practicalInfo.startDate}
                    />
                    </label>
            <label className='item'>
                End Date:
                <input
                    name='endDate'
                    className='input'
                    type='date'
                    placeholder=''
                    onChange={handleChange}
                    value={practicalInfo.endDate}
                    />
                    </label>
            <label className='item'>
                Description
                <textarea
                    name='description'
                    className='input'
                    placeholder='Description'
                    onChange={handleChange}
                    value={practicalInfo.description}
                    />
                    </label>
            <button type='submit' onClick={onSubmitForm}>Save</button>
        </form>
    )
}

export default Practical