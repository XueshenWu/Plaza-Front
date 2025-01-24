import { PasswordSigninForm } from "@/components/form/PasswordSigninForm";


export default async function SigninPage() {
  
    return (
        <PasswordSigninForm signupLink="/auth/signon" resetPasswordLink="/auth/reset" />
    )
}