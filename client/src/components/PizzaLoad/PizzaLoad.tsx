import { Dialog, DialogContent } from '@material-ui/core'
import React from 'react'

function PizzaLoad() {
    return (
        <Dialog
        className="bg-red"
            PaperProps={{
                style: {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                },
            }}
            open={true}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogContent>
                <div className="pizza">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => <div key={i} className="slice"></div>)}
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default PizzaLoad
