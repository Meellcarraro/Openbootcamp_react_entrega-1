import React from 'react';
import PropTypes from 'prop-types';
import { contactInfo } from '../../models/info.class';
import Contacto from '../contacto';




const ContactoList = () => {

    const defaultContact = new contactInfo('Melina', 'Carraro', 'melinacarraro@outlook.com', false);

    return (
        <div>
            <h2>Lista de contactos</h2>
            <Contacto contactInfo={ defaultContact }></Contacto>
        </div>
    );

  
};




export default ContactoList;
