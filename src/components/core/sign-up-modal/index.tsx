import { Steps } from "./steps"
export const SignUpModal = () => {
    return (
        <>
            <input type="checkbox" id="sign-up-modal" className="modal-toggle" />
            <label htmlFor="sign-up-modal" className="modal cursor-pointer">
                <label className="modal-box relative space-y-2" htmlFor="">
                    <label htmlFor="sign-up-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <ul className="steps w-full">
                        <li className="step step-primary cursor-pointer">Info</li>
                        <li className="step cursor-pointer">Register</li>
                    </ul>

                    <h3 className="text-lg font-bold">Sign Up</h3>
                    <Steps />
                </label>
            </label>
        </>
    )
}