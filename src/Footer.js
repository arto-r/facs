const Footer = () => {
    return(
        <div className="footer">
            <p>&copy; Fryeburg Academy</p>
            <a className="brandlinks" href="https://www.instagram.com/arto_rashid/" target="_blank">
                <span className="fa fa-brands fa-instagram" style={{padding:"0.5em 0.6em"}}></span>
            </a>
            <a className="brandlinks" href="https://www.snapchat.com/add/artoooo.o" target="_blank">
                <span className="fa fa-brands fa-snapchat"></span>
            </a>
            <a className="brandlinks" href="mailto:artoghrul.rashid23@fryeburgacademy.org" target="_blank">
                <span className="fa fa-envelope" aria-hidden="true"></span>
            </a>
        </div>
    )
}

export default Footer;