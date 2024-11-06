import React from 'react'

const RegisterModal = () => {
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn bg-[#0A8F0A] hover:bg-[#0F430F] w-full text-white font-bold border-[none] rounded-[10px] focus:outline-none focus:shadow-outline transition duration-300" type="submit'" onClick={() => document.getElementById('my_modal_5').showModal()}>إنشاء حساب</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-[#292929]">
                    <h3 className="font-bold text-lg">!مرحبًا بك</h3>
                    <p className="py-4">تم إنشاء حسابك بنجاح</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn bg-[#292929] transition duration-300 hover:bg-[#292929]">إغلاق</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default RegisterModal