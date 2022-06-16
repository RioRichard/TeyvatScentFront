import React from 'react'

export function AddAccountStaff({close}) {
  return (
    <div className="modalver2" style={{ position: 'fixed', top: '0', bottom: '0', right: '0', left: 0, zIndex: '4' }}>
            <div className="modal-container">
                <div className="closever2">
                    <a style={{ textDecoration: 'none' }} className="close" onClick={close}>
                        &times;
                    </a>
                </div>
                <header className="modal-header">
                    <i className="far fa-edit"></i>
                    Thêm Tài Khoản
                </header>
                <form id="addform" >
                    <div className="modal-body" style={{ maxHeight: '500px' }}>
                        <div className="modal-staff-name">
                            <label htmlFor="text-tickets" className="modal-label">
                                <strong>Tên Đăng Nhập</strong>
                            </label>
                            <input id="text-tickets" type="text" className="modal-input" placeholder="Enter Staff's UserName" name="staffName2" style={{ minWidth: '100%' }}  />
                        </div>
                        <div className="modal-staff-name">
                            <label htmlFor="text-tickets" className="modal-label">
                                <strong>Mật Khẩu</strong>
                            </label>
                            <input id="text-tickets" type="text" className="modal-input" placeholder="Enter Staff's Password" name="staffPass2" style={{ minWidth: '100%' }}  />
                        </div>
                        <div className="modal-staff-name">
                            <label htmlFor="text-tickets" className="modal-label">
                                <strong>Xác Nhận Mật Khẩu</strong>
                            </label>
                            <input id="text-tickets" type="text" className="modal-input" placeholder="Enter Staff's Comfirm Password" name="staffComfirmPass2" style={{ minWidth: '100%' }}  />
                        </div>
                        <div className="modal-staff-name">
                            <label htmlFor="text-tickets" className="modal-label">
                                <strong>Họ Và Tên Nhân Viên</strong>
                            </label>
                            <input id="text-tickets" type="text" className="modal-input" placeholder="Enter Staff's FullName" name="staffFullName" style={{ minWidth: '100%' }}  />
                        </div>
                        <div className="modal-staff-name">
                            <label htmlFor="text-tickets" className="modal-label">
                                <strong>Email</strong>
                            </label>
                            <input id="text-tickets" type="text" className="modal-input" placeholder="Enter Staff's Email" name="staffEmail2" style={{ minWidth: '100%' }}  />
                        </div>
                        <h4>Giới tính</h4>
                        
                    </div>
                    <footer className="modal-footer">
                        <button  type='submit' className="buy-tickets save" >
                            <i className="fas fa-check"></i>
                            LƯU
                        </button>
                    </footer>
                </form>
            </div>
        </div>
  )
}
