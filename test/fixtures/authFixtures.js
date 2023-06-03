export const initialState = {
        status: 'checking',//'checking'. 'not-authenticated'. 'authenticated
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
}

export const authenticatedState = {
    status: 'authenticated',
    uid: '23445',
    email: 'demo@google.com',
    displayName: 'demo user',
    photoURL: 'http',
    errorMessage: null,
}

export const notAuthenticatedState = {
    status: 'not-authenticated',//'checking'. 'not-authenticated'. 'authenticated
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
}

export const demoUser = {
    uid: 'avd44',
    email: 'demo@gmail.com',
    displayName: 'demo user',
    photoURL: 'http'
}