import React from 'react';
import Modal from '../modal'
const StreamDelete = () => {
    const actions = (
        <React.Fragment>
            <button className="ui primary button negative">Delete</button>
            <button className="ui button">Cancel</button>
        </React.Fragment>
    );
    return (
        <div>
            StreamDelete
            <Modal
                title="Delete Stream"
                content="Are you sure you want to delete this stream? 🤔"
                actions={actions}
            />
        </div>
    );
};

export default StreamDelete;