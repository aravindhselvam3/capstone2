const getToken = () => {
    const user = sessionStorage.getItem('LoggedInUser');
    return user.token;
}

export default getToken;