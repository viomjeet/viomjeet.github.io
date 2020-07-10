const rootEl = document.getElementById('root');
class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="header">
                        <a className="brand" href="/">VIOMJEET</a>
                        <span className="navbar_btn"><i className="fad fa-bars"></i></span>
                    </div>
                </div>
            </header>
        )
    }
}

class Content extends React.Component {
    render() {
        return (
            <div className="center_content">
                <h1 className="page_title">VIKAS KUMAR</h1>
                <p className="page_body">Front End Developer</p>
                <ul className="social_icons">
                    <li><a target="_blank" href="https://www.linkedin.com/in/viomjeet/" rel="noopener Linkedin"
                        title="Linked in"><i className="fab fa-linkedin-in"></i></a></li>
                    <li><a href="mailto:viomjeet@gmail.com" rel="noopener Email" title="Email"><i
                        className="fad fa-envelope-open"></i></a></li>
                    <li><a href="tel:9716785812" rel="noopener Mobile" title="Mobile"><i className="fad fa-mobile"></i></a></li>
                    <li><a href="skype:live:viomjeet?chat" rel="noopener Skype" title="Skype"><i
                        className="fab fa-skype"></i></a>
                    </li>
                </ul>
            </div>
        )
    }
}

class Footer extends React.Component {
    state = { date: new Date() }
    render() {
        const copy = String.fromCharCode(169);
        const { date } = this.state;
        return (
            <footer>
                <div className="container">
                    <div className="ecart-footer">
                        <a className="footer_link" href="https://www.viomjeet.net/" target="_blank">{copy} viomjeet
					<span id="date">&nbsp; {date.getFullYear()}</span></a>
                        <span>Made with <i className="text-danger fad fa-heart"></i> in india</span>
                    </div>
                </div>
            </footer>
        )
    }
}
class ViomJeet extends React.Component {
    render() {
        return (
            <div>
                <section className="home_banner">
                    <Header />
                    <Content />
                </section>
                <Footer />
            </div>
        )
    }
}
ReactDOM.render(<ViomJeet />, rootEl)
