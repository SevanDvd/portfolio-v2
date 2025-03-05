import React, {useState, useEffect, useRef} from "react"
import './App.css'

function Top(){

    const [projectTxt, setProjectTxt] = useState("Projets\u00A0\u00A0\ V");
    const projectDiv = useRef(null);
    const bioDiv = useRef(null);
    const parentProjDiv = useRef(null);
      
    useEffect(() => {

        const handleResize = () => 
            {
                if(window.innerWidth < 768)
                {
                    
                    projectDiv.current.classList.remove("w-3/4")
                    projectDiv.current.classList.add("w-2/4")
                    parentProjDiv.current.classList.remove("w-60")
                    parentProjDiv.current.classList.add("w-30")
                    bioDiv.current.classList.remove("w-1/4")
                    bioDiv.current.classList.add("w-2/4")
                    setProjectTxt("V")
                }
                else
                {
                    projectDiv.current.classList.add("w-3/4");
                    projectDiv.current.classList.remove("w-2/4");
                    parentProjDiv.current.classList.remove("w-30")
                    parentProjDiv.current.classList.add("w-60")
                    bioDiv.current.classList.add("w-1/4")
                    bioDiv.current.classList.remove("w-2/4")
                    setProjectTxt("Projets\u00A0\u00A0\ V")
                }
            }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }

    }, [])

    return (
        <>
            <header className="w-full h-24 flex items-center justify-between">

                <div href="" className="w-44 h-12 cursor-pointer hover:bg-[#00000040] border-4 border-black ml-4 text-center">
                    <p className="font-[Retron2000] text-black text-2xl m-1">
                    Sevan David
                    </p>
                </div>

                <div ref={parentProjDiv} className="w-60 h-12 flex mr-4">
                    <div id="projectCell" ref={projectDiv} className="w-3/4 h-12 cursor-pointer border-4 border-black ml-4 bg-white text-center">
                        <p className="font-[Retron2000] text-black text-2xl m-1">
                        {projectTxt}
                        </p>
                    </div>

                    <div ref={bioDiv} className="w-1/4 h-12 cursor-pointer hover:bg-[#00000040] border-4 border-black border-l-0 text-center">
                        <p className="font-[Retron2000] text-black text-2xl m-1">
                        Moi
                        </p>
                    </div>
                </div>
                
            </header>
        </>
    )
}

// const styles = {
//     header: {
//         width: "100%",
//         height: "100px"
//     }
// }

export default Top