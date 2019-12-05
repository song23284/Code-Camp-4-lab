const answer = prompt('Red or blue')

const Reality = (
    <p style={{ fontWight: 'bold', color: 'red' }}>Reality          </p>
)

const matrix = (
    <p style={{ fontWight: 'bold', color: 'green' }}>Reality          </p>
)

const App =
    answer === 'red' ? Reality :
        answer === 'blue' ? matrix :
            '.......'

ReactDOM.render(
    App,
    root


);