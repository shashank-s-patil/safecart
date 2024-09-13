import { postData } from "./context.service";

const url = "http://localhost:5000/checkUser/";

const checkSellerurl = "http://localhost:5000/checkSeller/";


export function checkUser(data, options){
    return postData(url, data, options);
}

export function checkSeller(data, options){
    return postData(checkSellerurl, data, options);
}












