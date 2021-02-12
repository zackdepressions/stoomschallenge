import { Button, Dialog, DialogTitle } from '@material-ui/core';
import React from 'react'
import PropTypes from 'prop-types'

function DialogComponent(props: any) {
    const { onClose, callback, title, open } = props;

    const handleClose = () => {
        onClose();
        callback();
    };


    return (
        <div>
            <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
                <DialogTitle id="simple-dialog-title">{title}</DialogTitle>
                <Button
                className="buttonok"
                    onClick={handleClose}
                >
                    OK
                </Button>
            </Dialog>
        </div>
    )
}


DialogComponent.propTypes = {
    onClose: PropTypes.func,
    callback: PropTypes.func,
    open: PropTypes.bool,
    title: PropTypes.string
}

export default React.memo(DialogComponent)
