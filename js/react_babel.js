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
    constructor() {
        super();
        this.state = {
            pagetitle: "VIKAS KUMAR",
            pagebody: 'Front End Developer',
            social: []
        }
        fetch('./js/social.json').then(response => response.json())
            .then(data => {
                this.setState({ social: data.map(items => items) });
            })
            .catch(error => console.log(error));

    }
    render() {
        const { social } = this.state;
        return (
            <div className="center_content">
                <h1 className="page_title">VIKAS KUMAR</h1>
                <p className="page_body">Front End Developer</p>
                <ul className="social_icons">
                    {social.map((items, index) => {
                        return (<li key={index}><a target={items.datatarget} href={items.datahref} rel={items.datarel[0], items.datarel[1]} title={items.title}><i className={items.icon[0] + " " + items.icon[1]}></i></a></li>)
                    })}
                </ul>
            </div>
        )
    }
}

class Footer extends React.Component {
    constructor() {
        super();
        this.state = {
            date: new Date(),
        }
    }
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
