'use client';
import { Toaster } from 'react-hot-toast';


export const ClientWrapper = ({ children }) => {
    return (
        <>
            <Toaster position='top-right' />
            {children}
        </>
    )
}