import React from 'react';

function About() {
    // Datos ficticios para el componente "Acerca de"
    const aboutData = {
        nombre: 'Stefano Straga',
        edad: 23,
        profesion: 'Soporte tecnico y desarrollador web',
        descripcion: 'Soy un apasionado de la informatica en general , todo lo que sea software y hardware me encanta, trabajo actualmente como soporte tecnico y desarrollador web , aprendiendo cosas nuevas todos los días.',
    };

    return (
        <div className="container">
            <h2>Acerca de Mí</h2>
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title">{aboutData.nombre}</h3>
                    <p className="card-text">Edad: {aboutData.edad} años</p>
                    <p className="card-text">Profesión: {aboutData.profesion}</p>
                    <p className="card-text">{aboutData.descripcion}</p>
                </div>
            </div>
        </div>
    );
}

export default About;
