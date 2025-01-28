import { z } from 'zod';





const imageSchema = (size?: number) => z
    .instanceof(FileList)
    .refine((fileList) => {

        if (fileList.length === 0) {
            return true;
        } else {
            const file = fileList[0];
            const isImage = file.type.startsWith('image/');
            const isSizeValid = size ? file.size <= size * 1024 * 1024 : true;
            return isImage && isSizeValid;
        }



    }, {
        message: 'File must be an image',
    })

const _ = imageSchema();

export default _;

export { imageSchema };
