import React from 'react';
import { contactInfo } from '../models/info.class';
import PropTypes from 'prop-types';


const Contacto = ( { contactInfo }) => {
    return (
        <div>
            <h2>Contact</h2>
            <h3>
                nombre : { contactInfo.name }
            </h3>
            <h3>
                apellido : { contactInfo.surname }
            </h3>
            <h3>
                mail : { contactInfo.mail }
            </h3>
            <h3>
                conectado :  { contactInfo.conected==true ? 'CONTACTO EN LINEA' : 'CONTACTO NO DISPONIBLE'}
            </h3>
        </div>
    );
};


Contacto.propTypes = {
    contactInfo : PropTypes.instanceOf(contactInfo)

};


export default Contacto;
