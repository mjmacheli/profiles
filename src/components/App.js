import React, {Component} from 'react'

import Header from './Header'
import Profiles from './Profiles'
import ProfileDetails from './ProfileDetails'

const App = () => (
    <div>
        <Header/>
        <main style={{display: 'flex'}}>
            <Profiles style={{flex: 3}}/>
            <ProfileDetails style={{flex: 5}}/>
        </main>
        
    </div>
)

export default App