import PropTypes from 'prop-types'

function CounterButton({by = 1, incrementMethod, decrementMethod}) {

    return (
        <div className="CounterButton">
            <div>
                <button className="buttonIncrement" onClick={() => incrementMethod(by)}>
                    +{by}
                </button>
                <button className="buttonIncrement" onClick={() => decrementMethod(by)}>
                    -{by}
                </button>
            </div>
        </div>
    )
}

CounterButton.propTypes = {
    by : PropTypes.number
}



export default CounterButton;