export async function videoToThumbnail(file: File, clipAt: number = 0): Promise<[string, number]> {
    const { promise, resolve, reject } = Promise.withResolvers<[string, number]>()

 

    const video = document.createElement('video')
    video.onerror = reject
    video.src = URL.createObjectURL(file)
    video.setAttribute('src', URL.createObjectURL(file))
    video.load()
    video.addEventListener('error', reject)
    video.addEventListener('loadedmetadata', () => {
        if (video.duration < clipAt) {
            return reject('Video is shorter than clip time')
        }

        setTimeout(() => {
            video.currentTime = clipAt
        }, 500)

        video.addEventListener('seeked', () => {
            const videoCanvas = document.createElement('canvas')
            videoCanvas.width = video.videoWidth
            videoCanvas.height = video.videoHeight

            const videoCtx = videoCanvas.getContext('2d')
            if (!videoCtx) {
                return reject('Failed to create canvas context')
            }
            videoCtx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight)

            resolve([videoCtx.canvas.toDataURL('image/jpeg', 0.5), video.duration])
        })
    })


    return await promise
}