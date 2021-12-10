import cookie from 'js-cookie'

export const handleLogin = (token) => {
    cookie.set('token', token);
}


export const handleLogout = () => {
    cookie.remove('token');
}