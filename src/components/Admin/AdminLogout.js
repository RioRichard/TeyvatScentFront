import React from 'react'
import swal from 'sweetalert'
export function AdminLogout(){
    sessionStorage.removeItem('dataAdmin')
    sessionStorage.removeItem('user')
    window.location.href="/";
}
export function runLogoutTimer(dispatchEvent)
{
    setTimeout(()=>{
        swal({
            closeOnClickOutside: false,
            title: "Phiên đăng nhập quá hạn, xin hãy đăng nhập lại",
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
                dispatchEvent(AdminLogout());
                break;
           
              case "willSign":
                sessionStorage.removeItem('dataAdmin')
                window.location.href="/adminlogin"
                break;
           
              default:
                dispatchEvent(AdminLogout());
            }
          });
    },1800000 )
}