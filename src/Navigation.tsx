import { Link } from "react-router-dom";

function Navigation () {
    return (
        <div className = "bg-[#130007] text-white flex items-center justify-between p-5">
            <h1 className = "ml-10 text-1/6">Camden's Portfolio</h1>
            <div className = "w-1/8 flex items-center justify-between">
                <a href = "./cw.pdf" target = "_blank" className = "m-5 text-1/6">My Resume</a>
                <Link to = "https://github.com/camdenwahl" target = "_blank"><img src="./github-mark.png" alt="Github Link" className = "invert mr-10 w-14"/></Link>
            </div>
        </div>
    )
}

export default Navigation;