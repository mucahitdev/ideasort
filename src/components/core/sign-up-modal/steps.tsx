'use client';
import React, { useEffect, useState } from 'react'

export const Steps = () => {
    const [stepNum, setStepNum] = useState(0)

    useEffect(() => {
        const steps = document.querySelectorAll('.step')
        steps.forEach((step, index) => {
            step.addEventListener('click', () => {
                setStepNum(index)
            })
        })
    }, [])

    useEffect(() => {
        const steps = document.querySelectorAll('.step')
        steps.forEach((step, index) => {
            if (index == stepNum) {
                step.classList.add('step-primary')
            } else {
                if (index !== 0)
                step.classList.remove('step-primary')
            }
        })
    }, [stepNum])

  return (
    <div>
        {
            stepNum == 0 ? (
                <div className="w-full">
                    Info
                </div>
            ) : (
                <div className="w-full">
                    Register
                </div>
            )
        }
    </div>   
  )
}