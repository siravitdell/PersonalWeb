import "./topbar.css"
export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar "+ (menuOpen && "active")}>
            <div className="topbar-wrapper">
                <div className="topbar-left">
                    {/* <a className="topbar-name" href="#intro">SIRAVIT</a> */}
                </div>
                <div className="topbar-right">
                        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)} >
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
