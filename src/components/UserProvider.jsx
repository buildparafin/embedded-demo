// import { createContext, useState, useMemo } from 'react';
// import axios from 'axios';

// const UserContext = createContext({
//   username: '',
//   loading: false,
//   login: (username) => {},
//   logout: () => {}
// });

// function UserProvider({children}) {
//   const [loading, setLoading] = useState(false)
//   const [username, setUsername] = useState(null);
//   const value = useMemo(
//     () => ({ username, login, logout }), 
//     [username]
//   );

//   async function login(username) {
//     // const response = await axios.get('/api/user')
//     setUsername(username)
//   }
//   function logout() {
//     setUsername(null)
//   }

//   return (
//     <UserContext.Provider value={value}>
//       {children}
//     </UserContext.Provider>
//   )
// }

// export {UserContext, UserProvider as default}