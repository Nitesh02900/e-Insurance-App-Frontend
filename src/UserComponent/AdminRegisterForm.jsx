// import { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';


// const AdminRegisterForm = () => {
//   let navigate = useNavigate();

//   const [registerRequest, setRegisterRequest] = useState({});
//   const handleUserInput = (e) => {
//     setRegisterRequest({ ...registerRequest, [e.target.name]: e.target.value });
//   };
//   const clearForm = () => {
//     setRegisterRequest({
//       email: '', 
//       password: '',
//     });
//   };


//   const loginAction = async (e) => {
//     try {
//       const response = await fetch("http://localhost:8080/insuranceapp/registeradmin", {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(registerRequest),
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       console.log(data);

//       if (data.success) {
//         toast.success(data.responseMessage, {
//           position: "top-center",
//           autoClose: 1000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });

//         setTimeout(() => {
//           navigate("/user/login"); // Use the navigate hook to redirect
//         }, 1000);
//       } else {
//         toast.error(data.responseMessage || "It seems there is an issue", {
//           position: "top-center",
//           autoClose: 1000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("It seems there is an issue", {
//         position: "top-center",
//         autoClose: 1000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       });
//     }
//     e.preventDefault();
//   };


//   return (
//     <div>
//       <div className="mt-2 d-flex aligns-items-center justify-content-center">
//         <div
//           className="card form-card border-color custom-bg"
//           style={{ width: "25rem" }}
//         >
//           <div className="card-header bg-color text-center custom-bg-text">
//             <h4 className="card-title">Admin Register</h4>
//           </div>
//           <div className="user-icon text-center my-1">
//             <FontAwesomeIcon icon={faUser} className="mr-2" size="4x" color="black" />
//           </div>
//           <div className="card-body">
//             <form>
//               <div className="mb-3 text-color">
//                 <label for="emailId" class="form-label">
//                   <b>Email Id</b>
//                 </label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="email"
//                   name="email"
//                   onChange={handleUserInput}
//                   value={registerRequest.email}
//                 />
//               </div>
//               <div className="mb-3 text-color">
//                 <label for="password" className="form-label">
//                   <b>Password</b>
//                 </label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="password"
//                   name="password"
//                   onChange={handleUserInput}
//                   value={registerRequest.password}
//                   autoComplete="on"
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="btn bg-color custom-bg-text"
//                 onClick={loginAction}
//               >
//                 Login
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-warning text-dark"
//                 onClick={clearForm}
//                 style={{ marginLeft: '20px' }}
//               >
//                 Clear
//               </button>
//               <ToastContainer />
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminRegisterForm;
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AdminRegisterForm = () => {
//   const [registerData, setRegisterData] = useState({
//     firstname: '',
//     lastname: '',
//     username: '',
//     password: '',
//     emailId: '',
//     mobileNumber: '',
//     dateOfBirth: '',
//     active: true,
//   });

//   const navigate = useNavigate();

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setRegisterData((prevData) => ({
//       ...prevData,
//       [name]: name === 'dateOfBirth' ? formatDate(value) : value,
//     }));
//   };

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const year = date.getFullYear();
//     const month = (date.getMonth() + 1).toString().padStart(2, '0');
//     const day = date.getDate().toString().padStart(2, '0');
//     return `${year}-${month}-${day}`;
//   };

//   const handleRegister = async () => {
//     try {
//       // Your registration logic here, e.g., calling an API with registerData
//       console.log('Registering with:', registerData);

//       // Example: Making an API call to store data
//       const response = await fetch('http://localhost:8080/insuranceapp/registeradmin', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ userdetails: registerData }),
//       });

//       const data = await response.json();
//       console.log('Data stored successfully:', data);

//       // Redirect to the login page or perform other actions as needed
//       // For redirecting, you can use react-router-dom or any other routing library
//       navigate('/user/login');
//     } catch (error) {
//       console.error('Error storing data:', error);
//     }
//   };

//   return (
//     <div>
//       <label htmlFor="firstname">First Name:</label>
//       <input
//         type="text"
//         id="firstname"
//         name="firstname"
//         value={registerData.firstname}
//         onChange={handleInputChange}
//       />

//       <label htmlFor="lastname">Last Name:</label>
//       <input
//         type="text"
//         id="lastname"
//         name="lastname"
//         value={registerData.lastname}
//         onChange={handleInputChange}
//       />

//       <label htmlFor="username">Username:</label>
//       <input
//         type="text"
//         id="username"
//         name="username"
//         value={registerData.username}
//         onChange={handleInputChange}
//       />

//       <label htmlFor="password">Password:</label>
//       <input
//         type="password"
//         id="password"
//         name="password"
//         value={registerData.password}
//         onChange={handleInputChange}
//         autoComplete="new-password" // Set autocomplete to "new-password"
//       />

//       <label htmlFor="emailId">Email:</label>
//       <input
//         type="email"
//         id="emailId"
//         name="emailId"
//         value={registerData.emailId}
//         onChange={handleInputChange}
//         autoComplete="email" // Set autocomplete to "email"
//       />

//       <label htmlFor="mobileNumber">Mobile Number:</label>
//       <input
//         type="text"
//         id="mobileNumber"
//         name="mobileNumber"
//         value={registerData.mobileNumber}
//         onChange={handleInputChange}
//       />

//       <label htmlFor="dateOfBirth">Date of Birth:</label>
//       <input
//         type="date"
//         id="dateOfBirth"
//         name="dateOfBirth"
//         value={registerData.dateOfBirth}
//         onChange={handleInputChange}
//       />

//       <label htmlFor="active">Active:</label>
//       <input
//         type="checkbox"
//         id="active"
//         name="active"
//         checked={registerData.active}
//         onChange={handleInputChange}
//       />

//       <button onClick={handleRegister}>Register</button>
//     </div>
//   );
// };

// export default AdminRegisterForm;
// import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from "react-router-dom";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';

// const AdminRegisterForm = () => {
//   let navigate = useNavigate();

//   const [registerRequest, setRegisterRequest] = useState({
//     firstname: '',
//     lastname: '',
//     username: '',
//     password: '',
//     email: '',
//     mobileNumber: '',
//     dateOfBirth: '',
//     active: true,
//   });

//   const handleUserInput = (e) => {
//     setRegisterRequest({ ...registerRequest, [e.target.name]: e.target.value });
//   };

//   const clearForm = () => {
//     setRegisterRequest({
//       firstname: '',
//       lastname: '',
//       username: '',
//       password: '',
//       email: '',
//       mobileNumber: '',
//       dateOfBirth: '',
//       active: true,
//     });
//   };
//   const loginAction = async (e) => {
//     e.preventDefault();
  
//     try {
//       const response = await fetch("http://localhost:8080/insuranceapp/registeradmin", {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ userdetails: registerRequest }),
//       });
  
//       if (!response.ok) {
//         throw new Error(`Network response was not ok: ${response.statusText}`);
//       }
  
//       const data = await response.text();
//       console.log("Raw response:", data);
  
//       if (data.includes("User Registered Successfully")) {
//         // Assume success based on the response message
//         toast.success("User Registered Successfully", {
//           position: "top-center",
//           autoClose: 1000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });
  
//         setTimeout(() => {
//           navigate("/user/login");
//         }, 1000);
//       } else {
//         // Handle other response scenarios
//         toast.error("It seems there is an issue", {
//           position: "top-center",
//           autoClose: 1000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("It seems there is an issue", {
//         position: "top-center",
//         autoClose: 1000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       });
//     }
//   };
  
//   return (
//     <div>
//       <div className="mt-2 d-flex aligns-items-center justify-content-center">
//         <div
//           className="card form-card border-color custom-bg"
//           style={{ width: "25rem" }}
//         >
//           <div className="card-header bg-color text-center custom-bg-text">
//             <h4 className="card-title">Admin Register</h4>
//           </div>
//           <div className="user-icon text-center my-1">
//             <FontAwesomeIcon icon={faUser} className="mr-2" size="4x" color="black" />
//           </div>
//           <div className="card-body">
//             <form>
//               <div className="mb-3 text-color">
//                 <label htmlFor="firstname" className="form-label">
//                   <b>First Name</b>
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="firstname"
//                   name="firstname"
//                   onChange={handleUserInput}
//                   value={registerRequest.firstname}
//                 />
//               </div>
//               <div className="mb-3 text-color">
//                 <label htmlFor="lastname" className="form-label">
//                   <b>Last Name</b>
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="lastname"
//                   name="lastname"
//                   onChange={handleUserInput}
//                   value={registerRequest.lastname}
//                 />
//               </div>
//               <div className="mb-3 text-color">
//                 <label htmlFor="username" className="form-label">
//                   <b>Username</b>
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="username"
//                   name="username"
//                   onChange={handleUserInput}
//                   value={registerRequest.username}
//                   autoComplete="username" // Add this line
//                 />
//               </div>

//               <div className="mb-3 text-color">
//                 <label htmlFor="password" className="form-label">
//                   <b>Password</b>
//                 </label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="password"
//                   name="password"
//                   onChange={handleUserInput}
//                   value={registerRequest.password}
//                   autoComplete="new-password" // Updated to "new-password" for password fields
//                 />
//               </div>

//               <div className="mb-3 text-color">
//                 <label htmlFor="emailId" className="form-label">
//                   <b>Email</b>
//                 </label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="emaild"
//                   name="emailId"
//                   onChange={handleUserInput}
//                   value={registerRequest.emailId}
//                 />
//               </div>
//               <div className="mb-3 text-color">
//                 <label htmlFor="mobileNumber" className="form-label">
//                   <b>Mobile Number</b>
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="mobileNumber"
//                   name="mobileNumber"
//                   onChange={handleUserInput}
//                   value={registerRequest.mobileNumber}
//                 />
//               </div>
//               <div className="mb-3 text-color">
//                 <label htmlFor="dateOfBirth" className="form-label">
//                   <b>Date of Birth</b>
//                 </label>
//                 <input
//                   type="date"
//                   className="form-control"
//                   id="dateOfBirth"
//                   name="dateOfBirth"
//                   onChange={handleUserInput}
//                   value={registerRequest.dateOfBirth}
//                 />
//               </div>
//               <div className="mb-3 text-color">
//                 <label htmlFor="active" className="form-label">
//                   <b>Status</b>
//                 </label>
//                 <input
//                   type="checkbox"
//                   className="form-check-input"
//                   id="active"
//                   name="active"
//                   checked={registerRequest.active}
//                   onChange={handleUserInput}
//                 />
//               </div>
//               <button
//                 type="submit"
//                 className="btn bg-color custom-bg-text"
//                 onClick={loginAction}
//               >
//                 Register
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-warning text-dark"
//                 onClick={clearForm}
//                 style={{ marginLeft: '20px' }}
//               >
//                 Clear
//               </button>
//               <ToastContainer />
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminRegisterForm;
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const AdminRegisterForm = () => {
  let navigate = useNavigate();

  const [registerRequest, setRegisterRequest] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    email: "",
    mobileNumber: "",
    dateOfBirth: "",
    active: true,
  });

  const handleUserInput = (e) => {
    setRegisterRequest({ ...registerRequest, [e.target.name]: e.target.value });
  };

  const clearForm = () => {
    setRegisterRequest({
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      email: "",
      mobileNumber: "",
      dateOfBirth: "",
      active: true,
    });
  };

  const loginAction = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/insuranceapp/registeradmin", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userdetails: registerRequest }),
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const data = await response.text();
      console.log("Raw response:", data);

      if (data.includes("User Registered Successfully")) {
        // Assume success based on the response message
        toast.success("User Registered Successfully", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setTimeout(() => {
          navigate("/user/login");
        }, 1000);
      } else {
        // Handle other response scenarios
        toast.error("It seems there is an issue", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("It seems there is an issue", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div>
      <div className="mt-2 d-flex aligns-items-center justify-content-center">
        <div
          className="card form-card border-color custom-bg"
          style={{ width: "30rem" }}
        >
          <div className="card-header bg-color text-center custom-bg-text">
            <h4 className="card-title">Admin Register</h4>
          </div>
          <div className="user-icon text-center my-1">
            <FontAwesomeIcon icon={faUser} className="mr-2" size="4x" color="black" />
          </div>
          <div className="card-body">
            <form>
              <div className="row mb-3 text-color">
                <div className="col-md-6">
                  <label htmlFor="firstname" className="form-label">
                    <b>First Name</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstname"
                    name="firstname"
                    onChange={handleUserInput}
                    value={registerRequest.firstname}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="lastname" className="form-label">
                    <b>Last Name</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastname"
                    name="lastname"
                    onChange={handleUserInput}
                    value={registerRequest.lastname}
                  />
                </div>
              </div>

              <div className="row mb-3 text-color">
                <div className="col-md-6">
                  <label htmlFor="username" className="form-label">
                    <b>Username</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    onChange={handleUserInput}
                    value={registerRequest.username}
                    autoComplete="username"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="password" className="form-label">
                    <b>Password</b>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    onChange={handleUserInput}
                    value={registerRequest.password}
                    autoComplete="new-password"
                  />
                </div>
              </div>

              <div className="row mb-3 text-color">
                <div className="col-md-6">
                  <label htmlFor="emailId" className="form-label">
                    <b>Email</b>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="emaild"
                    name="emailId"
                    onChange={handleUserInput}
                    value={registerRequest.emailId}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="mobileNumber" className="form-label">
                    <b>Mobile Number</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="mobileNumber"
                    name="mobileNumber"
                    onChange={handleUserInput}
                    value={registerRequest.mobileNumber}
                  />
                </div>
              </div>

              <div className="row mb-3 text-color">
                <div className="col-md-6">
                  <label htmlFor="dateOfBirth" className="form-label">
                    <b>Date of Birth</b>
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    onChange={handleUserInput}
                    value={registerRequest.dateOfBirth}
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="active" className="form-label">
                    <b>Status</b>
                  </label>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="active"
                    name="active"
                    checked={registerRequest.active}
                    onChange={handleUserInput}
                  />
                </div>
              </div>

              <div className="mb-3 text-color">
                <button
                  type="submit"
                  className="btn bg-color custom-bg-text"
                  onClick={loginAction}
                >
                  Register
                </button>
                <button
                  type="button"
                  className="btn btn-warning text-dark"
                  onClick={clearForm}
                  style={{ marginLeft: "20px" }}
                >
                  Clear
                </button>
              </div>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRegisterForm;
