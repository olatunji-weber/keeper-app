import React from "react";

function Footer(){
    const date = new Date().getFullYear();
    return <footer>
        <p>Olatunji Olayinka Copyright &copy; {date}</p>
    </footer>;
}

export default Footer;