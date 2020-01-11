import React from 'react'
import Fene from '../static/img/fene.png'

const ProfilesDetails = ({style}) => (

    <section style={style}>
        <h2>Malefetsane J Macheli</h2>
        <img src={Fene} atl='Fenne' />
        <p>Age: 26</p>
        <p>Gender: Male</p>
        <p>Location: Johhaneburg</p>
        <p>Bio: Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, sed enim provident quae voluptatum dolor molestiae. Ad, impedit tenetur sint maxime odit nostrum earum, dolorum, perferendis illo minus iste expedita.</p>
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

export default ProfilesDetails