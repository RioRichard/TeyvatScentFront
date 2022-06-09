import React,{useEffect, useState} from 'react';
import '../Content/CSS/Button.css'
export function Info() {
    const url = `https://localhost:44380/api/Authentication/Info`
    const [info, setInfo] = useState(0)
    let auth = sessionStorage.getItem('data')
    // useEffect(() => {
    //     fetch(url, {
    //         method: 'get',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //             'Authorization': "Bearer " + auth,
    //         }
    //     }
    //     )
    //         .then(response => response.json()

    //         ).then(data => setInfo(data))
    // }, [url])

    // console.log(info)
    return (
        <div className='wrapper'>
            <main>
                <div className="container-fluid">                    
                    <h1 className="mt-4">THÔNG TIN TÀI KHOẢN ADMIN</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item"><a href="/admin">Trang quản lí</a></li>

                            <li className="breadcrumb-item active">Thông tin tài khoản admin</li>
                        </ol>
                    <div className="card-body">
                        <div className="form-group">
                            <label className="small mb-1" for="inputEmailAddress">UserName</label>
                            <input style={{maxWidth:'50%'}} className="form-control py-4" id="inputEmailAddress" type="text" disabled defaultValue={info.userName}/>
                        </div>
                        <div className="form-group">
                            <label className="small mb-1" for="email">Email</label>
                            <input style={{maxWidth:'50%'}} className="form-control py-4" id="email" type="email" disabled defaultValue={info.email} />
                        </div>
                        <form method="post" name="changeInfo" id="changeInfo"/>

                            <div className="form-group">
                                <label className="small mb-1" for="fullname">Tên đầy đủ</label>
                                <input style={{maxWidth:'50%'}} className="form-control py-4" id="fullname" type="text" name="fullname" placeholder="" />
                            </div>
                            <h4>Giới tính</h4>
                            <div class="form-group">
                            <input type="radio" id="Nam" name="gender" value="true" checked />
                                <label for="Nam">Nam</label><br />
                                <input type="radio" id="Nu" name="gender" value="false" />
                                <label for="Nu">Nữ</label><br />
                                <label for="gender" class="error"></label>
                            </div>
                    </div>
                </div>
            </main>
        </div>
    );
}