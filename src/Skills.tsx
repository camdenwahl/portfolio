import { useEffect, useState } from "react";

function Skills () {
    const [imageState, setImageState] = useState<String[] | undefined>();

    function readImages() {
        let imagePaths: string[] = [];
        const directory = './techstack'
        for (let i = 1; i <= 12; i++) {
            let currentPath = `${directory}/${i}.png`
            imagePaths.push(currentPath);
        }
        setImageState(imagePaths);
    }

    useEffect(() => {
        readImages();
      }, []);
    

    return (
        <div className = "flex m-10 flex-col">
            <h1 className = "text-4xl p-5">A glance at my tech stack:</h1>
            <div className = "flex bg-[#6320EE] p-5 rounded-lg w-full shadow-2xl md:flex-nowrap flex-wrap items-center justify-center">
            {imageState?.map((imagePath) => (
                <img src = {imagePath.toString()} className = "w-1/4 m-2 md:w-1/2"/>
            ))}
            </div>
        </div>
    )
}


export default Skills;