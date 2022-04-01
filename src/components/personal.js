import React, { useState } from 'react'
import Preview from './preview'

const Personal = (props) => {

    const [personalInfo, setAllInfo] = useState({
        personal: true, //preview use only
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
    })

    const [changeState, setChangeState] = useState(true)

    const handleChange = (e) => {
        setAllInfo( prevValues => {
            return{...prevValues, [e.target.name] : e.target.value}
        })
    }

    const onSubmitForm = (e) => {
        e.preventDefault()
        setChangeState(prevMode => !prevMode)
    }

    const { personal, firstName, lastName, email, phoneNumber} = personalInfo

    if(!changeState) {
        return (
            <Preview
                personal={personal}
                firstName={firstName}
                lastName={lastName}
                email={email}
                phoneNumber={phoneNumber}
                onEdit={onSubmitForm}
            />
        )
    }

    return (
        <form className='form personal'>
            <label className='item'> 
                First Name:
                <input
                    name='firstName'
                    className='input'
                    type='text'
                    placeholder='First Name'
                    onChange={handleChange}
                    value={personalInfo.firstName}
                    />
                </label>
            <label className='item'>
                Last Name:
                <input
                name='lastName'
                className='input'
                type='text'
                placeholder='Last Name'
                onChange={handleChange}
                value={personalInfo.lastName}
                /></label>
            <label className='item'>
                Email:
                <input
                name='email'
                className='input'
                type='email'
                placeholder='Email'
                onChange={handleChange}
                value={personalInfo.email}
                /></label>
            
            <label className='item'>
                Phone Number:
                <input
                name='phoneNumber'
                className='input'
                type='tel'
                // pattern=' [0-9] {3} - [0-9] {3} - [0-9] {4}'
                placeholder='Phone Number'
                onChange={handleChange}
                value={personalInfo.phoneNumber}
                /></label>
            

            <button className='btn' type='submit' onClick={onSubmitForm}>
                Save
                </button>
        </form>
    )
}

export default Personal