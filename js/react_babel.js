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
            pagebody: 'Freelancer, front-end developer, Web Developer',
            social: [],
            projects: [
                { "bgimg": "code.jpg", "title": "xtReduxCrud", "datarel": ["noopener,xtReduxCrud"], "datatarget": "_blank", "url": "https://viomjeet.net/xtReduxCrud", "skills": ["React", "React-Redux", "HTML5", "SASS"] },
                { "bgimg": "code.jpg", "title": "xtbox", "datarel": ["noopener,xtbox"], "datatarget": "_blank", "url": "https://viomjeet.net/xtbox", "skills": ["React", "React-Redux", "HTML5", "SASS"] },
                { "bgimg": "code.jpg", "title": "breakingbad", "datarel": ["noopener,breakingbad"], "datatarget": "_blank", "url": "https://viomjeet.net/breakingbad", "skills": ["React", "React-Redux", "HTML5", "SASS"] },
                { "bgimg": "code.jpg", "title": "redux_1", "datarel": ["noopener,redux_1"], "datatarget": "_blank", "url": "https://viomjeet.net/redux_1", "skills": ["React", "React-Redux", "HTML5", "Bootstrap"] },
                { "bgimg": "code.jpg", "title": "redux_2", "datarel": ["noopener,redux_2"], "datatarget": "_blank", "url": "https://viomjeet.net/redux_2", "skills": ["React", "React-Redux", "HTML5", "Bootstrap"] },
                { "bgimg": "code.jpg", "title": "xtp", "datarel": ["noopener,xtp"], "datatarget": "_blank", "url": "https://viomjeet.net/xtp/", "skills": ["React", "HTML5", "SASS"] },
                { "bgimg": "code.jpg", "title": "jstst", "datarel": ["noopener,jstst"], "datatarget": "_blank", "url": "https://viomjeet.net/jstst", "skills": ["jQuery", "HTML5", "CSS"] },
                { "bgimg": "code.jpg", "title": "ecart", "datarel": ["noopener,ecart"], "datatarget": "_blank", "url": "https://viomjeet.net/ecart", "skills": ["React", "HTML5", "CSS"] },
                { "bgimg": "code.jpg", "title": "ReactCRUDAPP", "datarel": ["noopener,ReactCRUDAPP"], "url": "https://viomjeet.net/ReactCRUDAPP", "skills": ["React", "HTML5", "CSS", "Bootstrap"] }
            ],
            skills: [
                { "title": "React.js", "img": "react.png", "progress": "50", "bg": "bg-success" },
                { "title": "Redux", "img": "redux.png", "progress": "50", "bg": "bg-warning" },
                { "title": "javascript", "img": "js.png", "progress": "70", "bg": "bg-danger" },
                { "title": "jquery.js", "img": "jquery.png", "progress": "80", "bg": "bg-info" },
                { "title": "HTML5", "img": "html.png", "progress": "80", "bg": "bg-secondary" },
                { "title": "CSS", "img": "css2.png", "progress": "80", "bg": "bg-primary" },
                { "title": "SCSS", "img": "sass.png", "progress": "60", "bg": "bg-danger" },
                { "title": "Bootstrap", "img": "bs.png", "progress": "60", "bg": "bg-warning" },
                { "title": "JSON", "img": "json.png", "progress": "70", "bg": "bg-info" },
                { "title": "API integration", "img": "api.png", "progress": "70", "bg": "bg-secondary" }

            ],
        }
        const fetchApi = async () => {
            const fetchData = await fetch('./js/social.json').then(response => response.json()).catch(error => { console.log(error) })
            this.setState({ social: fetchData })
        }
        fetchApi();
    }
    render() {
        const { social } = this.state;
        const { projects } = this.state;
        const { skills } = this.state;
        return (

            <div className="center_content">
                <div className="coderBanner">
                    <h1 className="page_title">{this.state.pagetitle}</h1>
                    <p className="page_body">{this.state.pagebody}</p>
                </div>
                <div className="container">
                    <div className="boxPanel">
                        <h4>Latest Projectes</h4>
                        <ul className="projects">
                            {projects.map((items, index) => {
                                return (<li key={index}>
                                    <a target={items.datatarget} href={items.url} rel={items.datarel[0], items.datarel[1]}>

                                        <div className="projectImg">
                                            <img src={`${'images/'}${items.bgimg}`} alt="" />
                                        </div>

                                        <div className="projectName">
                                            <strong>{items.title}</strong>

                                        </div>
                                        <ul>
                                            {items.skills.map(skills => (
                                                <li key={skills}>{skills}</li>
                                            ))}
                                        </ul>
                                    </a>
                                </li>)
                            })}
                        </ul>
                    </div>
                    <div className="boxPanel">
                        <h4>Skills</h4>
                        <ul className="projects">
                            {skills.map((items, index) => {
                                return (<li key={index}>
                                    <a>
                                        <div className="skills">
                                            <img src={`${'./images/img/'}${items.img}`} />
                                            <strong>{items.title}</strong>
                                        </div>
                                    </a>
                                    <div className="cusProgress">
                                        <div className="progress">
                                            <div className={`progress-bar ${items.bg}`} role="progressbar" style={{ "width": `${items.progress}%` }} aria-valuenow={items.progress} aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </li>)
                            })}
                        </ul>
                    </div>
                    <div className="boxPanel">
                        <h4>Contact me</h4>
                        <ul className="social_icons">
                            {social.map((items, index) => {
                                return (<li key={index}>
                                    <a target={items.datatarget} href={items.datahref} rel={items.datarel[0], items.datarel[1]} title={items.title}><i className={items.icon[0] + " " + items.icon[1]}></i></a></li>)
                            })}
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
}

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="ecart-footer">
                        <a className="footer_link" href="https://www.viomjeet.net/">&copy; viomjeet
					<span id="date">&nbsp;{new Date().getFullYear()}</span></a>
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
            <section className="home_banner">
                <Header />
                <div className="bannerIn">
                    <Content />
                </div>
                <Footer />
            </section>
        )
    }
}
ReactDOM.render(<ViomJeet />, rootEl)
