import React from 'react'

function PizzaLoad() {
    return (
        <div>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(_ => <div className="slice"></div>)}
        </div>
    )
}

export default PizzaLoad
