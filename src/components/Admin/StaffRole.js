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
    console.log(role);
    let content = null;
    // console.log(role);
    // console.log(props.value);
    function change(id, e) {
        e.preventDefault();
        console.log(id);
        const index = e.target.selectedIndex;
        const el = e.target.childNodes[index]
        const option = el.getAttribute('id');
        console.log(option);
        const changeStatusUrl = Url + '/api/Admin/ChangeRole/' + id;
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
        console.log(props.value);
        content =
            <input style={{ maxWidth: '50%' }} id="inputEmailAddress" type="text" disabled defaultValue={props.value.role[0].roleName} />
    }
    return (
        <div>
            { content }
        </div>
    )
}