"use client"
import React, { useState } from 'react'

const Video = ({item, index}) => {
    const [show, setShow] = useState(false)
    return (
        <div className="video">
            <i class="fa-brands fa-youtube"></i>
            {
                show&&<iframe src={`https://www.youtube.com/embed/${item}?si=SoHI-M8AcK5tqIgr`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            }
            <img src={`/images/video_tumbnails/${index+1}.jpg`} alt="" />
        </div>
    )
}
export default Video