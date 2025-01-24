import { redirect } from "next/navigation";

export default async function Redirect(){
    return redirect('/auth/reset/request')
}