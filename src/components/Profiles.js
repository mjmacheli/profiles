import React from 'react'

const Profiles = ({style, profiles, onClick}) => (
    
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


export default Profiles