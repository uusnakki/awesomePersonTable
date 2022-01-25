import '../App.css';



const Header = () => {

    return (
        <div className="headerComponent">
            <h1>
                Person table application
            </h1>
            <p>by Joonas Uusnäkki</p>
            <a
                className="App-link"
                href="https://www.linkedin.com/in/joonas-uusn%C3%A4kki-82300a198/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Check out my LinkedIn
            </a>
        </div>
    );
};

export default Header;