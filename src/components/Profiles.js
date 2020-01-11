import React from 'react'
import PropTypes from 'prop-types'


const Profiles = ({ style, profiles, onClick }) => (
    <div style={style}>
        {profiles.map(profile =>(
            <section key={profile.id}
             onClick={()=>onClick(profile.id)}
            >
                <h3>{profile.first_name} {profile.last_name}</h3>
                <span>{profile.gender}</span>
                <span>{profile.age}</span>
                <span>{profile.localtion}</span>
            </section>
        ))}
    </div>
)

Profiles.propTypes = {
    profiles: PropTypes.array,
    onClick: PropTypes.func,
    style: PropTypes.style
}


export default Profiles