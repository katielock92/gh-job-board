

export default function HeaderComponent() {
    return (
        <div className="navBar">
            <a href="https://mx51.com" target="_blank" rel="noreferrer">
            {/* note that image doesn't seem full-res - Katie to replace this file */}
            <img className="logo" src={require("../assets/images/mx51_logo.png")} alt={"mx51 logo"}/>
            </a>
        </div>
    )
}