import React from 'react';
import Arrow from "../assets/ARROW.svg"
import '../styles/Collapse.css'


function Collapse(props) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className="collapse">
            <button onClick={handleOpen} className="collapse-btn"><p className="collapse-title">{props.title}</p><img src={Arrow} alt='arrow' className='arrow-vector' /></button>
            {open ? <div className="collapse-content">{props.content}</div> : <div className="closed-collapse"></div>}
        </div>

    );
}

export default Collapse;