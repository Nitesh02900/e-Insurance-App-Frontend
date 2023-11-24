// import React from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// const CenteredContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// `;

// const SmallCardContainer = styled.div`
//   width: 50%; /* Adjusted width */
//   margin-top: 20px;
//   color: red; /* Light gray background for visualization */
//   padding: 20px;
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// `;

// const SmallCard = styled.div`
//   background-color:#FDF0D5;
//   color: #333;
//   border-radius: 5px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   transition: transform 0.3s;

//   &:hover {
//     transform: scale(1.05);
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//   }
// `;

// const CardBody = styled.div`
//   padding: 20px;
// `;

// const TitleCard = styled.div`
//   background-color: #780000;
//   color: white;
//   border-radius: 5px 5px 0 0;
//   padding: 20px;
//   margin-bottom: 20px;
// `;

// const Th = styled.th`
//   padding: 10px;
//   text-align: center;

// `;

// const Td = styled.td`
//   padding: 10px;
//   text-align: center;
//   border-bottom: 1px solid #ddd;
// `;

// const ViewButton = styled(Link)`
//   background-color: #007bff;
//   color: white;
//   text-decoration: none;
//   padding: 5px 10px;
//   border-radius: 5px;
//   cursor: pointer;
//   margin: 0 5px;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const PageSizeSelect = styled.select`
//   margin-right: 10px;
// `;

// const PaginationContainer = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
//   margin-top: 20px;
// `;

// const PaginationButton = styled.button`
//   background-color: #007bff;
//   color: white;
//   border: none;
//   padding: 5px 10px;
//   border-radius: 5px;
//   cursor: pointer;
//   margin: 0 5px;

//   &:disabled {
//     background-color: #ccc;
//     cursor: not-allowed;
//   }
// `;

// const SearchBar = styled.input`
//   width: 150px;
//   margin-right: 10px;
// `;

// const PlanTable = () => {
//   const plans = [
//     { id: 1, name: 'Health Insurance' },
//     { id: 2, name: 'Life Insurance' },
//     { id: 3, name: 'Travel Insurance' },
//     { id: 4, name: 'Home Insurance' },
//     { id: 5, name: 'Vehicle Insurance' },
//     // ... (more plans)
//   ];

//   const [searchTerm, setSearchTerm] = React.useState('');
//   const [pageSize, setPageSize] = React.useState(5);
//   const [currentPage, setCurrentPage] = React.useState(1);

//   const filteredPlans = plans.filter(plan =>
//     plan.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const totalPages = Math.ceil(filteredPlans.length / pageSize);
//   const startIndex = (currentPage - 1) * pageSize;
//   const endIndex = startIndex + pageSize;

//   const plansToDisplay = filteredPlans.slice(startIndex, endIndex);

//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//   };

//   return (
//     <CenteredContainer>
//       <SmallCardContainer>
//         <TitleCard>
//           <h2 className="card-title">Plan</h2>
//         </TitleCard>

//         <SmallCard>
//           <CardBody>
//             {/* Search Bar */}
//             <div className="mb-3 d-flex align-items-center">
//               <label className="mr-2">Search:</label>
//               <SearchBar
//                 type="text"
//                 placeholder="Plan name"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="form-control"
//               />
//             </div>

//             {/* Page Size Dropdown */}
//             <div className="mb-3 d-flex align-items-center">
//               <label className="mr-2">Page Size:</label>
//               <PageSizeSelect
//                 value={pageSize}
//                 onChange={(e) => setPageSize(parseInt(e.target.value))}
//               >
//                 <option value={5}>5 </option>
//                 <option value={10}>10 </option>
//                 <option value={15}>15</option>
//               </PageSizeSelect>
//             </div>

//             {/* Plan Table */}
//             <table className="table">
//               <thead>
//                 <tr>
//                   <Th>ID</Th>
//                   <Th>Plan Name</Th>
//                   <Th>Action</Th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {plansToDisplay.map((plan) => (
//                   <tr key={plan.id}>
//                     <Td>{plan.id}</Td>
//                     <Td>{plan.name}</Td>
//                     <Td>
//                       <ViewButton to={`/plans/${plan.id}`}>View Scheme</ViewButton>
//                     </Td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>

//             {/* Pagination Controls */}
//             <PaginationContainer>
//               <PaginationButton
//                 onClick={() => handlePageChange(currentPage - 1)}
//                 disabled={currentPage === 1}
//               >
//                 {'<'}
//               </PaginationButton>

//               {[...Array(totalPages).keys()].map((page) => (
//                 <PaginationButton
//                   key={page + 1}
//                   onClick={() => handlePageChange(page + 1)}
//                   className={currentPage === page + 1 ? 'active' : ''}
//                 >
//                   {page + 1}
//                 </PaginationButton>
//               ))}

//               <PaginationButton
//                 onClick={() => handlePageChange(currentPage + 1)}
//                 disabled={currentPage === totalPages}
//               >
//                 {'>'}
//               </PaginationButton>
//             </PaginationContainer>
//           </CardBody>
//         </SmallCard>
//       </SmallCardContainer>
//     </CenteredContainer>
//   );
// };

// export default PlanTable;


// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';

// const CenteredContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// `;

// const SmallCardContainer = styled.div`
//   width: 50%;
//   margin-top: 20px;
//   color: red;
//   padding: 20px;
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// `;

// const SmallCard = styled.div`
//   background-color: #fdf0d5;
//   color: #333;
//   border-radius: 5px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   transition: transform 0.3s;

//   &:hover {
//     transform: scale(1.05);
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//   }
// `;

// const CardBody = styled.div`
//   padding: 20px;
// `;

// const TitleCard = styled.div`
//   background-color: #780000;
//   color: white;
//   border-radius: 5px 5px 0 0;
//   padding: 20px;
//   margin-bottom: 20px;
// `;

// const Th = styled.th`
//   padding: 10px;
//   text-align: center;
// `;

// const Td = styled.td`
//   padding: 10px;
//   text-align: center;
//   border-bottom: 1px solid #ddd;
// `;

// const ViewButton = styled(Link)`
//   background-color: #007bff;
//   color: white;
//   text-decoration: none;
//   padding: 5px 10px;
//   border-radius: 5px;
//   cursor: pointer;
//   margin: 0 5px;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const PageSizeSelect = styled.select`
//   margin-right: 10px;
// `;

// const PaginationContainer = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
//   margin-top: 20px;
// `;

// const PaginationButton = styled.button`
//   background-color: #007bff;
//   color: white;
//   border: none;
//   padding: 5px 10px;
//   border-radius: 5px;
//   cursor: pointer;
//   margin: 0 5px;

//   &:disabled {
//     background-color: #ccc;
//     cursor: not-allowed;
//   }
// `;

// const SearchBar = styled.input`
//   width: 150px;
//   margin-right: 10px;
// `;

// const PlanTable = () => {
//   const [plans, setPlans] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [pageSize, setPageSize] = useState(5);
//   const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     const fetchInsurancePlans = async () => {
//       try {
//         // Retrieve the JWT token from wherever it's stored in your application
//         const jwtToken = sessionStorage.getItem("user-jwtToken"); // Adjust this based on your actual storage mechanism
//         console.log("JWT Token:", jwtToken);
//         const response = await fetch("http://localhost:8080/insuranceapp/insuranceplans", {
//           headers: {
//             Authorization: `Bearer ${jwtToken}`,
//           },
//         });

//         if (!response.ok) {
//           throw new Error(`Failed to fetch insurance plans: ${response.status}`);
//         }

//         const data = await response.json();
//         setPlans(data); // Update the state with the fetched data
//       } catch (error) {
//         console.error("Error fetching insurance plans:", error.message);
//       }
//     };

//     fetchInsurancePlans();
//   }, []);

//   const filteredPlans = plans.filter(plan =>
//     plan.planName.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const totalPages = Math.ceil(filteredPlans.length / pageSize);
//   const startIndex = (currentPage - 1) * pageSize;
//   const endIndex = startIndex + pageSize;

//   const plansToDisplay = filteredPlans.slice(startIndex, endIndex);

//   const handlePageChange = newPage => {
//     setCurrentPage(newPage);
//   };

//   return (
//     <CenteredContainer>
//       <SmallCardContainer>
//         <TitleCard>
//           <h2 className="card-title">Plan</h2>
//         </TitleCard>

//         <SmallCard>
//           <CardBody>
//             <div className="mb-3 d-flex align-items-center">
//               <label className="mr-2">Search:</label>
//               <SearchBar
//                 type="text"
//                 placeholder="Plan name"
//                 value={searchTerm}
//                 onChange={e => setSearchTerm(e.target.value)}
//                 className="form-control"
//               />
//             </div>

//             <div className="mb-3 d-flex align-items-center">
//               <label className="mr-2">Page Size:</label>
//               <PageSizeSelect
//                 value={pageSize}
//                 onChange={e => setPageSize(parseInt(e.target.value))}
//               >
//                 <option value={5}>5 </option>
//                 <option value={10}>10 </option>
//                 <option value={15}>15</option>
//               </PageSizeSelect>
//             </div>

//             <table className="table">
//               <thead>
//                 <tr>
//                   <Th>ID</Th>
//                   <Th>Plan Name</Th>
//                   <Th>Action</Th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {plansToDisplay.map(plan => (
//                   <tr key={plan.planId}>
//                     <Td>{plan.planId}</Td>
//                     <Td>{plan.planName}</Td>
//                     <Td>
//                       <ViewButton to={`/plans/${plan.planId}`}>View Scheme</ViewButton>
//                     </Td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>

//             <PaginationContainer>
//               <PaginationButton
//                 onClick={() => handlePageChange(currentPage - 1)}
//                 disabled={currentPage === 1}
//               >
//                 {'<'}
//               </PaginationButton>

//               {[...Array(totalPages).keys()].map(page => (
//                 <PaginationButton
//                   key={page + 1}
//                   onClick={() => handlePageChange(page + 1)}
//                   className={currentPage === page + 1 ? 'active' : ''}
//                 >
//                   {page + 1}
//                 </PaginationButton>
//               ))}

//               <PaginationButton
//                 onClick={() => handlePageChange(currentPage + 1)}
//                 disabled={currentPage === totalPages}
//               >
//                 {'>'}
//               </PaginationButton>
//             </PaginationContainer>
//           </CardBody>
//         </SmallCard>
//       </SmallCardContainer>
//     </CenteredContainer>
//   );
// };

// export default PlanTable;
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Title = styled.h1`
  color: #780000;
`;

const SmallCard = styled.div`
  background-color: #FDF0D5;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  margin-top: -50px;
  width: 50%;
`;

const CardBody = styled.div`
  padding: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const Th = styled.th`
  background-color: #780000;
  color: white;
  padding: 15px;
  text-align: left;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 15px;
  text-align: left;
`;

const Input = styled.input`
  padding: 10px;
  margin-right: 10px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 10px;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const PageButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 5px;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ViewButton = styled(Link)`
  background-color: #007bff;
  color: white;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

const PlanTable = () => {
  const [plans, setPlans] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [pageSize, setPageSize] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchInsurancePlans = async () => {
      try {
        const jwtToken = sessionStorage.getItem('user-jwtToken');

        const response = await fetch('http://localhost:8080/insuranceapp/insuranceplans', {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch insurance plans: ${response.status}`);
        }

        const data = await response.json();
        setPlans(data);
      } catch (error) {
        console.error('Error fetching insurance plans:', error.message);
      }
    };

    fetchInsurancePlans();
  }, []);

  const filteredPlans = plans.filter((plan) =>
    plan.planName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPlans.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const plansToDisplay = filteredPlans.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handlePageSizeChange = (newSize) => {
    setPageSize(newSize);
    setCurrentPage(1);
  };
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <Container>
      <SmallCard>
        <CardBody>
          <Title>Insurance Plans</Title>

          <div>
            <Input
              type="text"
              placeholder="Search Plan Name"
              value={searchTerm}
              onChange={handleSearch}
            />

            <Select
              value={pageSize}
              onChange={(e) => handlePageSizeChange(parseInt(e.target.value))}
            >
              <option value={2}>2</option>
              <option value={4}>4</option>
              <option value={6}>6</option>
            </Select>
          </div>

          <Table>
            <thead>
              <tr>
                <Th>Plan ID</Th>
                <Th>Plan Name</Th>
                <Th>Action</Th>
              </tr>
            </thead>
            <tbody>
              {plansToDisplay.map((plan) => (
                <tr key={plan.planId}>
                  <Td>{plan.planId}</Td>
                  <Td>{plan.planName}</Td>
                  <Td>
                    <ViewButton to={`/view-schemes/${plan.planId}`}>
                      View Scheme
                    </ViewButton>
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Pagination>
            <PageButton
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              {'<'}
            </PageButton>

            {[...Array(totalPages).keys()].map((page) => (
              <PageButton
                key={page + 1}
                onClick={() => handlePageChange(page + 1)}
                disabled={currentPage === page + 1}
              >
                {page + 1}
              </PageButton>
            ))}

            <PageButton
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              {'>'}
            </PageButton>
          </Pagination>
        </CardBody>
      </SmallCard>
    </Container>
  );
};

export default PlanTable;
