import imageCompression from "browser-image-compression";


export async function imageToThumbnail(file: File): Promise<File> {
    const options = {
        maxSizeMB: 0.5,
        maxWidthOrHeight: 480,
        useWebWorker: true
    }

    try {
        const compressedFile = await imageCompression(file, options)
        return compressedFile
    } catch (e) {
        console.error(e)
        return file
    }

}