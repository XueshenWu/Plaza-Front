'use client'


export async function readFileAsBase64(file: File): Promise<string> {



    const { promise, resolve, reject } = Promise.withResolvers<string>()
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = reject
    reader.readAsDataURL(file)
    return await promise
}

export async function readFileAsArrayBuffer(file: File): Promise<ArrayBuffer> {



    const { promise, resolve, reject } = Promise.withResolvers<ArrayBuffer>()
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result as ArrayBuffer)
    reader.onerror = reject
    reader.readAsArrayBuffer(file)
    return await promise
}