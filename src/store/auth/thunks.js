import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/provider"
import { clearNotesLogout } from "../journal/JournalSlice"
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = ( email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials())
    }
}

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials())

        const result = await singInWithGoogle()
        if ( !result.ok) dispatch(logout())

        dispatch( login(result))
         
    }
}


export const startCreatingUserWithEmailPassword = ({ email, password, displayName}) => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({email, password, displayName});
        if(!ok ) return dispatch( logout({errorMessage}))

        dispatch( login({uid, displayName, photoURL, email}))
    }
}

export const startLoginWithEmailPassword = ({email, password, errorMessage}) => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
        const result = await loginWithEmailPassword({email, password, errorMessage });
        if(!result.ok ) return dispatch( logout(result))

        dispatch(login(result))
    }
}


export const startLogout = () => {
    return async(dispatch) => {
        await logoutFirebase();
        dispatch(clearNotesLogout())
        dispatch(logout())
    }
}