import React, { useEffect, useState } from 'react';
export function GetStatus(props) {
    const statusUrl = 'https://localhost:44380/api/Invoice/GetAllStatus'
    const [status, setStatus] = useState(0)
    // console.log(props.value);
    useEffect(() => {
        fetch(statusUrl, {
            method: 'get',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }
        )
            .then(response => response.json()
            ).then(data => setStatus(data))
    }, [statusUrl])
    let content = null;
    if (status) {
        content =
            <select defaultValue={props.value} name="idStatus" id="" style={{ width: '140px' ,fontWeight: 'bold', color: '#000'}}>
                {status.map(item => {
                    return (                       
                        <option key={item.idStatus}>{item.statusName}</option>                  
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