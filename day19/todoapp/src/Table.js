import React from 'react'

class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = [{ naem: 'apple', id: 18 },
        { naem: 'banana', id: 30 },
        { naem: 'orange', id: 12 },
        { naem: 'peach', id: 8 },]
    }

    render() {
        return (
            <div>
                <table>
                    {this.state.map((item) => (

                        <tr>
                            <td>{item.naem}</td>
                            <td>{item.id}</td>

                        </tr>

                    ))}
                </table>
            </div>
        )
    }
}
export default Table