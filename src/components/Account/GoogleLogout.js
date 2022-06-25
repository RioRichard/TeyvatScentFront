import {GoogleLogout} from 'react-google-login'

export function GoogleLogout(){
    const client_id ='316310504535-jetl0vl6knlu73csqdufoi189kekv9cb.apps.googleusercontent.com'
    const onSuccess = () => {
        console.log("LOGOUT SUCCESS!")
      }
    return(
        <div id ="SignOutButton">
        <GoogleLogout
        client_id = {client_id}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
        />
        </div>
    )
}