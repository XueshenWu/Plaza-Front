import imageCompression from "browser-image-compression";


export async function compress(file: File): Promise<File> {
    const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
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