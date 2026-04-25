import {useParams, Link} from 'react-router-dom'

function WelcomeComponent() {
    const {username} = useParams()

    return (
        <div className="WelcomeComponent">
            <h1>
                Welcome Techiess {username} 
            </h1>
            <div>
                Smart Enough To understand the dynamics of people.
            </div>
            <div>
                Manager your todos - <Link to="/todos">Click</Link><br/>
            </div>
        </div>
    )
}

export default WelcomeComponent;