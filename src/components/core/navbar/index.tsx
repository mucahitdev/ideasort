import Link from "next/link"
import { ContainerUi } from "@/components"
import { MenuAvatar } from './menuAvatar'
import { SafeUser } from "@/types"

interface NavbarProps {
    currentUser?: SafeUser | null
}

export const Navbar = ({ currentUser }: NavbarProps) => {
    const isLogged = currentUser !== null

    return (
        <nav className="fixed w-full z-10 bg-white dark:bg-black">
            <ContainerUi className="flex flex-wrap items-center justify-between p-4">
                <div className="navbar min-h-0 h-12 md:min-h-16 md:h-16  bg-base-100 rounded-xl">
                    <div className="flex-1">
                        <a className="btn btn-ghost normal-case text-xl">Idea Sort</a>
                    </div>
                    {
                        isLogged ? (
                            <MenuAvatar currentUser={currentUser} />
                        ) : (
                            <div className="btn-group">
                                <label id="23" htmlFor="sign-up-modal" className="btn btn-sm md:btn-md">Sign Up</label>
                                <label id="32" htmlFor="login-modal" className="btn btn-sm md:btn-md btn-primary">Login</label>
                            </div>
                        )
                    }
                </div>
            </ContainerUi>
        </nav>
    )
}