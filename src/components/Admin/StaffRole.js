import React, { useEffect, useState } from 'react';
import Url from '../Home/URL'
export function StaffRole(props) {
    const roleUrl = Url + '/api/Role/GetRole'
    const [role, getRole] = useState(0)
    useEffect(() => {
        fetch(roleUrl, {
            method: 'get',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }
        )
            .then(response => response.json()
            ).then(data => getRole(data))
    }, [roleUrl])
    let content = null;
    console.log(role);
    console.log(props.value);
    function change(id, e) {
        e.preventDefault();
        console.log(id);
        const index = e.target.selectedIndex;
        const el = e.target.childNodes[index]
        const option = el.getAttribute('id');
        console.log(option);
        const changeStatusUrl = Url + '/api/Authentication/ChangeRole/' + id;
        fetch(changeStatusUrl, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    "roleId": String(option),
                    "isDelete": false
                  }
            )
        })
    }
    var x = document.getElementById('')
    if (role) {
        
        content =
            <select onChange={(e) => change(props.value.info.idStaff, e)} defaultValue={props.value.role.roleName} name="idStatus" id="statusChange" style={{ width: '140px', fontWeight: 'bold', color: '#000' }}>
                {role.map(item => {
                    return (
                        <option id={item.idRole} key={item.idRole}>{item.roleName}</option>
                    )
                }
                )}
            </select>
    }
    return (
        <div>
            { content }
        </div>
    )
}