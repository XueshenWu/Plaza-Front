'use client'

import { useMemo, useState } from 'react'
import { PasswordSigninForm } from '../form/PasswordSigninForm'
import { RegisterForm } from '../form/RegisterForm'
import { ResetPasswordRequestForm } from '../form/reset-password-request-form'
import { Button } from '../ui/button'
import { ArrowLeft, X } from 'lucide-react'

type FormType = 'signin' | 'signup' | 'reset'

type SignSwitchProps = {
    initialFormType?: FormType
    onClose?: () => void
}


export function SignSwith({
    initialFormType = 'signin',
    onClose
}: SignSwitchProps) {
    const [formType, setFormType] = useState<FormType>(initialFormType)
    const form = useMemo(() => {
        switch (formType) {
            case 'signin':
                return <PasswordSigninForm
                    useOauth={true}
                    onSignupClick={() => setFormType('signup')}
                    onResetPasswordClick={() => setFormType('reset')}
                />
            case 'signup':
                return <RegisterForm
                useOauth={true}
                    onSigninClick={() => setFormType('signin')}
                />
            case 'reset':
                return <ResetPasswordRequestForm />
        }
    }, [formType])
    return (
        <div className="flex flex-col items-center justify-start w-full h-full">
            <div className='flex flex-row-reverse justify-between w-full'>

                <Button onClick={onClose} variant={'ghost'} className='bg-slate-100 hover:bg-slate-200' ><X className='icon' /></Button>
                {formType === 'reset' && <Button onClick={() => setFormType('signin')} variant={'ghost'}><ArrowLeft className='icon' /></Button>}


            </div>
            <div className='h-full w-full flex-grow '>
                {form}
            </div>

        </div>
    )
}