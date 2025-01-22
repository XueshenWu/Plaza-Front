import { z } from 'zod';


const Message = z.object({
    name: z.string({
        required_error: 'Name is required',
    }).min(2, {
        message: 'Name must be at least 2 characters long',
    }).max(20, {
        message: 'Name must be less than 20 characters long',
    }),
    text: z.string({
        required_error: "Please leave a message",
        invalid_type_error: "Message must be a string and less than 300 characters",
    }).max(300, {
        message: 'Message must be less than 300 characters long',
    }).trim().default(''),
});


export default Message;