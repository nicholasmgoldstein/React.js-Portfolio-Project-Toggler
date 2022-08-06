import './App.css';
import React from 'react';

function Footer() {
    return(
    <footer>
            <label>
                Join the Newsletter:  
            </label>
                <form action="mailto:nicholasmgoldstein@gmail.com" method="post" enctype="text/plain">
                    <input type="email" placeholder="email@example.com"/>
                    <input type="hidden" value="Please add me to the mailing list!" />
                    <input type="submit" value="Join">

                    </input>
                </form>
    </footer>
  );
}

  
export default Footer;