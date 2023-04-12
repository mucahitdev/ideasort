'use client';
import React, { useEffect, useState } from 'react'
import { RegisterForm } from './register-form'

export const Steps = () => {
    const [stepNum, setStepNum] = useState<number>(0)
    const isFirstStep: boolean = stepNum == 0

    useEffect(() => {
        const steps: NodeListOf<Element> = document.querySelectorAll('.step')
        steps.forEach((step: Element, index: number) => {
            step.addEventListener('click', () => {
                setStepNum(index)
            })
        })
    }, [])

    useEffect(() => {
        const steps: NodeListOf<Element> = document.querySelectorAll('.step')
        steps.forEach((step: Element, index: number) => {
            if (index == stepNum) {
                step.classList.add('step-primary')
            } else {
                if (index !== 0) {
                    step.classList.remove('step-primary')
                }
            }
        })
    }, [stepNum])

    return (
        <div>
            {
                isFirstStep ? (
                    <div className="w-full">
                        You can log in with your email address or social media addresses (Github, Google).
                    </div>
                ) : (
                    <div className="w-full">
                        <RegisterForm />
                    </div>
                )
            }
        </div>
    )
}