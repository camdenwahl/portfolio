import { Link } from "react-router-dom";


function Portfolio () {
    return (
        <div>
            <h1 className = "text-5xl m-10 mt-40 text-center">My Portfolio:</h1>
            <div className = "flex flex-col items-center justify-center">
                <h2 className = "md:text-3xl m-4">Full Stack Blog</h2>
                <Link to = "https://blog-frontend-coral-three.vercel.app/" target = "_blank" className = "flex items-center justify-center m-4"><img src="./blog.png" alt="Blog" className = "w-1/2 border-black border-solid border-2 rounded"/></Link>
                <h2 className = "md:text-3xl m-4">Express Application</h2>
                <Link to = "https://irongatesrp.com/" target = "_blank" className = "flex items-center justify-center m-4"><img src="./irongates.png" alt="Iron Gates" className = "w-1/2 border-black border-solid border-2 rounded"/></Link>
                <h2 className = "md:text-3xl m-4">React To-Do App</h2>
                <Link to = "https://todo-react-five-self.vercel.app/" target = "_blank" className = "flex items-center justify-center m-4"><img src="./todo.png" alt="Iron Gates" className = "w-1/2 border-black border-solid border-2 rounded"/></Link>
            </div>
        </div>
    )
}

export default Portfolio;