import React, {Component} from 'react'

import Header from './Header'
import Profiles from './Profiles'
import ProfileDetails from './ProfileDetails'

class App extends Component {

    constructor(props){
        super(props)

        this.state = {
            profiles: [],
            current: null,
            
        }
    }

    componentDidMount(){
        fetch('profiles.json')
        .then(res => res.json())
        .then(profiles => {
            this.setState({profiles})
        })
    }

    checkOne = (id) => {
        fetch('profiles.json')
        .then(res => res.json())
        .then(current => {
            this.setState({current: current[id]})
        })
    }

    render() {
        const {profiles,current} = this.state

        return(
            <div>
                <Header style={{textAlign: 'center'}}/>
                <main style={{display: 'flex'}}>
                    <Profiles profiles={profiles} style={{flex: 3}} onClick={this.checkOne}/>
                    <ProfileDetails style={{flex: 5}} profile={current}/>
                </main>
            
            </div>
        )
    }
}
   
export default App