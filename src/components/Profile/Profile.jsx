import React from 'react';
import Modal from 'react-modal';
import { NavLink } from "react-router-dom";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

export const Profile = (props) => {
    var subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(true);
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    if (!props.profile) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
                <NavLink onClick={closeModal} to={'/content'}>
                    close123
                        </NavLink>
                <p>{props.profile.fullName}</p>
                <form>
                    <input />
                    <button>tab navigation</button>
                    <button>stays</button>
                    <button>inside</button>
                    <button>the modal</button>
                </form>
            </Modal>
        </div>
    );
}

// import React, { Fragment } from 'react';

// export const Profile = (props) => {
//     if(!props.profile) {
//         return <p>Loading...</p>
//     }
//     return(
//         <Fragment>
//             <p>{props.profile.fullName}</p>
//         </Fragment>
//     );
// }