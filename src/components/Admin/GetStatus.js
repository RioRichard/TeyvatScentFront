import React, { useEffect, useState } from 'react';
import Url from '../Home/URL'
export function GetStatus(props) {
    const statusUrl = Url + '/api/Invoice/GetAllStatus'
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
    console.log(props.value);
    function change(id, e)
    {
        e.preventDefault();
        console.log(id);
        const index = e.target.selectedIndex;
        const el = e.target.childNodes[index]
        const option = el.getAttribute('id');
        console.log(option);
        const changeStatusUrl=Url + '/api/Invoice/ChangeInvoiceStatus/'+id;
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
        // console.log(props.value);
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