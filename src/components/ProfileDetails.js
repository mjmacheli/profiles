import React from 'react'
import Fene from '../static/img/fene.png'

const ProfilesDetails = ({style,profile}) => {
    if(!profile) {
        return(<h1 style={style}>Click A Profile to view</h1>)
    }
    return(
        <section style={style}>
            <h2>{profile.first_name}{profile.last_name}</h2>
            <img src={Fene} atl='Fenne' />
            <p>Age: {profile.age}</p>
            <p>Gender: {profile.gender}</p>
            <p>Location: {profile.localtion}</p>
            <p>Bio: {profile.bio}</p>
            <br/>
            <h3>Hobbies</h3>
            <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem ipsum sit amet</li>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Lorem dolor sit amet</li>
                <li>Lipsum dolor sit amet</li>
                <li>Lorem ipsum dolor amet</li>
            </ul>
        </section>
    )
    
}

export default ProfilesDetails