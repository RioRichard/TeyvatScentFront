import React from 'react'
import swal from 'sweetalert'
export function Logout(){
    sessionStorage.removeItem('data')
    window.location.href="/";
}
export function runLogoutTimer(dispatchEvent)
{
    setTimeout(()=>{
        swal({
            closeOnClickOutside: false,
            title: "Đăng nhập quá hạn",
            buttons: {
                    cancel: "Thoát!",
                    willSign: {
                        text: "Đăng nhập!",
                        value: "willSign",
                      },
                },
          }).then((value) => {
            switch (value) {
           
              case "cancel":
                dispatchEvent(Logout());
                break;
           
              case "willSign":
                sessionStorage.removeItem('data')
                window.location.href="/signandlog"
                break;
           
              default:
                dispatchEvent(Logout());
            }
          });
    },1800000 )
}

