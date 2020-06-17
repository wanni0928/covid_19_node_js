// global "/"
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search/:id";
const USER_DETAIL = "/:id"

const routes = {
    home : HOME,
    join : JOIN,
    login : LOGIN,
    logout : LOGOUT,
    search : (id) => {
        if(id){
            return `/search/${id}`;
        }else{
            return SEARCH;
        }
    },
    userDetail : (id) => {
        if(id){
            return `/${id}`
        }else{
            return USER_DETAIL;
        }
    }
}

export default routes;