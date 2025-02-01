'use client'

import { videoToThumbnail } from "@/utils/videoclip"
import { useState } from "react"


export function VideoClip() {


    const [thumbnail, setThumbnail] = useState<string | null>(null)

    return (
        <div>
            <input type="file" accept="video/*" onChange={async (e) => {
                const file = e.target.files?.[0]
                if (!file) return
                const thumbnail = await videoToThumbnail(file, 0)
                setThumbnail(thumbnail[0])
            }} />
            <img className="h-[50vh] aspect-auto" src={thumbnail ?? undefined} alt="thumbnail" />

        </div>
    )
}