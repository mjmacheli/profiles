import React from 'react'
import PropTypes from 'prop-types'

import Fene from '../static/img/fene.png'

const ProfilesDetails = ({ style, profile }) => {
    if (!profile) {
        return (<h1 style={style}>Click A Profile to view</h1>)
    }
    return (
        <section style={style}>
            <h2>
                {profile.first_name}
                {profile.last_name}
            </h2>
            <img src={Fene} alt="Fenne" />
            <p>
                Age:
                {profile.age}
            </p>
            <p>
                Gender:
                {profile.gender}
            </p>
            <p>
                Location:
                {profile.localtion}
            </p>
            <p>
                Bio:
                {profile.bio}
            </p>
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

ProfilesDetails.defaultProps = {
    profile: null,
}

ProfilesDetails.propTypes = {
    profile: PropTypes.object,
    style: PropTypes.style,
}

export default ProfilesDetails
