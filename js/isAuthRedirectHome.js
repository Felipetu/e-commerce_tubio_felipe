const isAuthRedirectHome = () => {
    if (localStorage.getItem("email")){
        location.href = "./index.html"
    }
}

isAuthRedirectHome(1);