import { LoginForm } from "./login-form"

export const LoginModal = () => {
    return (
        <>
            <input type="checkbox" id="login-modal" className="modal-toggle" />
            <label htmlFor="login-modal" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <label htmlFor="login-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center">Login</h3>
                    <LoginForm />
                </label>
            </label>
        </>
    )
}