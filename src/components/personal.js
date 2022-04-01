import React, { useState } from 'react'

const Personal = ( props ) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    
    const handleChange = (e) => {
        setFirstName(e.target.value)
        setLastName(e.target.value)
        setEmail(e.target.value)
        setPhoneNumber(e.target.value)
    }

    return (
        <form>
            <input
                name='firstName'
                type='text'
                placeholder='First Name'
                onChange={handleChange}
                value={firstName}
                />
            <input
                name='lastName'
                type='text'
                placeholder='Last Name'
                onChange={handleChange}
                value={lastName}
                />
            <input
                name='email'
                type='email'
                placeholder='Email'
                onChange={handleChange}
                value={email}
                />
            <input
                name='phoneNumber'
                type='tel'
                pattern=' [0-9] {3} - [0-9] {3} = [0-9] {4}'
                placeholder='Phone Number'
                onChange={handleChange}
                value={phoneNumber}
                />
        </form>
    )
}

export default Personal;