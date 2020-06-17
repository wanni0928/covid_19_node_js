import routes from "../routes";
import Country from "../models/Countries"

//home
export const home = async(req, res) => {
    const queries = await Country.find({});
    res.render("home", {pageTitle: "Home", queries});
}

//join
export const getJoin = (req, res) => {
    res.render("join", {pageTitle: "Join"});
}

//login
export const getLogin = (req, res) => {
    res.render("login", {pageTitle : "login"})
}

//logout
export const getLogout = (req, res) => {
    console.log("to do logout");
    res.redirect(routes.home);
}


// //userDetail
// export const getUserDetail = (req, res) => {
//     res.render("userDetail", {pageTitle : "userDetail"});
// }

//search
export const getSearch = (req, res) => {
    // console.log(req);
    const {params} = req;
    // console.log(id)
    // let result = [];
    res.render("search", {pageTitle : `${params.id}`});
}