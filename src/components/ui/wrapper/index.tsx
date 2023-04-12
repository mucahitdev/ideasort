import React from 'react'
import { SignUpModal, LoginModal } from '@/components'
import { ClientWrapper } from './clientWrapper'


interface WrapperProps {
    children: React.ReactNode
}

export const Wrapper = ({ children }: WrapperProps) => {
    return (
        <>
            <SignUpModal />
            <LoginModal />
            <ClientWrapper>
                {children}
            </ClientWrapper>
        </>
    )
}