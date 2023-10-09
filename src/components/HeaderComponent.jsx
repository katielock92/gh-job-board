

export default function HeaderComponent() {
    return (
        // need to add styling but functionality is working
        <div className="navBar">
            <a href="https://mx51.com" target="_blank" rel="noreferrer">
            {/* note that image doesn't seem full-res - Katie to replace this file */}
            <img className="logo" src={require("./mx51_logo.png")} alt={"mx51 logo"}/>
            </a>
        </div>
    )
}