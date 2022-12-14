import React from 'react';
import Arrow from "../assets/ARROW.svg"
import '../styles/Accordion.css'


function Accordion(props) {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <div className="accordion">
            <button onClick={handleOpen} className="accordion-btn"><p className="accordion-title">Respect</p><img src={Arrow} alt='arrow' className='arrow-vector' /></button>
            {open ? <div className="accordion-content">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</div> : <div className="closed-accordion"></div>}
        </div>

    );
}

export default Accordion;