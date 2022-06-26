import {GoogleLogin} from 'react-google-login'
import React, {useEffect} from 'react';
import Url from '../Home/URL'

export function LoginFromGoogle(){
    const url = Url + '/api/Authentication/SignInGoogle'
    const client_id = '316310504535-jetl0vl6knlu73csqdufoi189kekv9cb.apps.googleusercontent.com'
    useEffect(() => {
        if (sessionStorage.getItem('data') != null || sessionStorage.getItem('tokenGoogle') != null) {
            window.location.href = '/'
        }
    }, []);
    const onSuccess = (res, ) =>{
        var info = res.profileObj;
        var option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "userName": info.googleId,
                "pass": "string",
                "email": info.email,
                "urlFrontEnd": "string"
            })
        }
        useEffect(() => {
        fetch(url,option)
        .then(res => res.json())
        .then((data)=> {
            console.log(data)
            sessionStorage.setItem("tokenGoogle", data.data)
            alert(data.msg)
            if(data.success = true)
            {
                window.location.href = '/'
            }
        })
    }, []);
    }
    const onFailure = (res) => {
        console.log("LOGIN FAILURE! res:", res)
    }
    return(
        <div id ="Signinbutton" style={{marginTop: '20px', marginLeft:'120px'}} >
        <GoogleLogin
        clientid = {client_id}
        buttonText="|Đăng nhập bằng GOOGLE"
        onSuccess={onSuccess}
        onFailure = {onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={true}
        />
        </div>
    )
}