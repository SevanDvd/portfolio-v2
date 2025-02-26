import React from "react"
import './App.css'

function Top(){

    return (
        <>
            <header className="w-full h-24 flex items-center justify-between">

                <div href="" className="w-44 h-12 cursor-pointer hover:bg-[#00000040] border-4 border-black ml-4">
                    <p className="font-[Retron2000] text-black text-2xl m-1">
                    Sevan David
                    </p>
                </div>

                <div className="w-61 h-12 flex mr-4 ">

                    <div className="w-45 h-12 cursor-pointer border-4 border-black ml-4 bg-white">
                        <p className="font-[Retron2000] text-black text-2xl m-1">
                        Projets &nbsp; &nbsp; V
                        </p>
                    </div>

                    <div className="w-14 h-12 cursor-pointer hover:bg-[#00000040] border-4 border-black -m-1">
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