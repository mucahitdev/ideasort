'use client'
import Link from "next/link"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { signOut } from "next-auth/react"


export const MenuAvatar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const avatarlist = useRef(null)

    const handleClose = () => {
        setIsOpen(false)
    }

    const handleOpen = () => {
        setIsOpen(true)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (avatarlist.current && !avatarlist.current.contains(event.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [avatarlist])

    const userImage = false

    return (
        <div className="flex-none">
            {/* <div className="dropdown dropdown-end">
                            <label tabIndex={3} className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" /><path fill="white" d="M15 19a2 2 0 0 1-1.85 1.995L13 21h-2a2 2 0 0 1-1.995-1.85L9 19h6ZM12 2a7 7 0 0 1 6.996 6.76L19 9v3.764l1.822 3.644a1.1 1.1 0 0 1-.869 1.586l-.115.006H4.162a1.1 1.1 0 0 1-1.03-1.487l.046-.105L5 12.764V9a7 7 0 0 1 7-7Zm0 2a5 5 0 0 0-4.995 4.783L7 9v3.764a2 2 0 0 1-.136.725l-.075.17L5.619 16h12.763l-1.17-2.342a2.002 2.002 0 0 1-.203-.709L17 12.764V9a5 5 0 0 0-5-5Z" /></g></svg>
                                    <span className="badge badge-sm indicator-item">8</span>
                                </div>
                            </label>
                            <div tabIndex={3} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                                <div className="card-body">
                                    <span className="font-bold text-lg">8 Items</span>
                                    <span className="text-info">Subtotal: $999</span>
                                    <div className="card-actions">
                                        <button className="btn btn-primary btn-block">View cart</button>
                                    </div>
                                </div>
                            </div>
                        </div> */
            }
            <div className="dropdown dropdown-end">
                {
                    userImage ? (
                        <label tabIndex={2} className="btn btn-ghost btn-circle avatar" onClick={handleOpen}>
                            <div className="w-10 rounded-full" >
                                <Image src={userImage} alt="user" width={40} height={40} />
                            </div>
                        </label>
                    ) : (
                        <div tabIndex={2} className="btn btn-ghost btn-circle avatar placeholder" onClick={handleOpen}>
                            <div className="bg-neutral-focus text-neutral-content rounded-full w-10">
                                <span>MX</span>
                            </div>
                        </div>
                    )
                }
                <ul ref={avatarlist} tabIndex={2} className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
                    <li onClick={handleClose}>
                        <Link href="/profile" >
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link href="/settings" onClick={handleClose} >
                            Settings
                        </Link>
                    </li>
                    <li>
                        <Link href="/" onClick={()=> {
                            signOut()
                            handleClose()
                        }} >
                            Logout
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}





