export const server = "http://localhost:8080/";
// export const server = "https://29a6-1-52-224-51.ngrok.io/";

export const login = server + "api/auth/signin";
export const singup = server + "api/auth/signup";
export const changepass = server + "api/auth/changePass";
export const resetpass = server + "api/auth/resetPass";
export const check_user_and_email = server + "api/auth/checkUserAndEmail";
export const listuserfind = server + "api/auth/find/page";
export const apiauth = server + "api/auth";
export const apiauthedituser = server + "api/auth/edit";

export const quanlytaikhoanpage = server + "quanlytaikhoan/find/page";
export const quanlytaikhoan = server + "quanlytaikhoan";
export const quanlytaikhoanfind = server + "quanlytaikhoan/find";
export const quanlytaikhoanlogin = server + "quanlytaikhoan/login";
export const checktaikhoantontai = server + "quanlytaikhoan/findAccountByUser";
export const quanlytaikhoanresetpass = server + "quanlytaikhoan/resetpass";
export const getAllQuyen = server + "quanlyquyen/getAllSelect";

export const uploadFile = server + "uploadFile";
export const downloadFile = server + "downloadFile";
