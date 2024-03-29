import axios from "axios";

const AuthService = {
 
  login: async (username, password) => {
    const response = await axios.post(
      "https://api.escuelajs.co/api/v1/auth/login",
      {
        "email": username,
        "password": password,
      }
    );
    
    console.log(response)
      if(response.data.access_token){
      localStorage.setItem("user",JSON.stringify(response.data))
      }

      return response.data;
  },


  logout:()=>{
    localStorage.removeItem("user")
  },


  getCurrentUser : () => {
    return JSON.parse(localStorage.getItem("user"));
  }



};

export default AuthService;

// const AuthService = {
//   isAuthenticated: false,

//   login(username, password) {
//     //In a real app,you'd have API calls here.
//     // This is just a mockup, so we'll simulate async behavior with a promise
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         if (username == "admin" && password == "password") {
//           this.isAuthenticated = true;
//           resolve();
//         }
//         reject();
//       }, 1000);
//     });
//   },
//   logout() {
//     this.isAuthenticated = false;
//   },
// };

// export default AuthService;
