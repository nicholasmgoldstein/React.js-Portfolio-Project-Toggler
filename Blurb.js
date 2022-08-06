import './App.css';
import React from 'react';

function Blurb() {
    return(
    <section id="blurb">
        <div className="blurbBox">
            <p className="blurb"><i>
            Aurum Tech LLC is burgeoning tech company focused on blockchain 
            and web development. We build interesting and secure dApps, webapps,
            and a myriad of other projects related to technology. Aurum Technologies
            is a small-sized company with big goals. We take donations if you enjoy 
            using our products and we're open to collaboration with interested patrons.
            Our currently operating applications include: Blokracy (A dApp utilizing the 
            blockchain to support a public voting ecosystem.) and Persona256 (A dApp 
            used for decentralized identification, meant to be used for the secure 
            transfer of data). With many more projects to come, feel to join our  
            newsletter and stay up to date.
            </i></p>
            <br /><br />
        </div>
       
    </section>
  );
}

  
export default Blurb;