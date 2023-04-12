import React from 'react'
import { SignUpModal, LoginModal } from '@/components'

interface WrapperProps {
    children: React.ReactNode
}

export const Wrapper = ({ children }: WrapperProps) => {
    return (
        <>
            <SignUpModal />
            <LoginModal />
            {children}
        </>
    )
}