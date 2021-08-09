import React from 'react'
import ReactDOM from 'react-dom'
import Reservation from './components/pages/reservation'

const App: React.FC = () => {
    return (
        <>
            <div className="container text-center">
                <Reservation></Reservation>
            </div>
        </>
    )
}
if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'))
}
