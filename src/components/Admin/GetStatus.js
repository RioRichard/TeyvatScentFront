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
    console.log(status);
    function change(id, e)
    {
        e.preventDefault();
        console.log(id);
        const index = e.target.selectedIndex;
        const el = e.target.childNodes[index]
        const option = el.getAttribute('id');
        console.log(option);
        const changeStatusUrl='https://localhost:44380/api/Invoice/ChangeInvoiceStatus/'+id;
        fetch(changeStatusUrl,{
            method:'put',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(
                option
              )
        })
    }
    var x= document.getElementById('')
    if(status) {
        content =
            <select onChange={(e)=>change(props.value.id,e)} defaultValue={props.value.statused.statusName} name="idStatus" id="statusChange" style={{ width: '140px' ,fontWeight: 'bold', color: '#000'}}>
                {status.map(item => {
                    return (                       
                        <option id={item.idStatus} key={item.idStatus}>{item.statusName}</option>               
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