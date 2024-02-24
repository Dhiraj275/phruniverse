import Contact from '@/components/contact'
import Header from '@/components/header'
import React from 'react'
import Video from "@/components/videography/video"
const Videography = () => {
    const videos = [
        "8sHdx9Eig6M",
        "fDcp0Zf_60I",
        "h1h7v977DCc",
        "UZAJL510q0w"
    ]
    return (
        <>
            <Header />
            <div class="page-heading">
                <h1>Videography</h1>
            </div>
            <div className="video-wrap">
{
    videos.map((item, index)=>{
        return(
                <Video item={item} index={index}/>
            )
    })
}
            </div>
            <div
                //  style={{ background: "#050505" }} 
                className="common-section-2">
                <Contact />
            </div>
        </>
    )
}

export default Videography