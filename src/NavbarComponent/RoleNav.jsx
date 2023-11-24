import AdminHeader from "./AdminHeader";
import NormalHeader from "./NormalHeader";
import CustomerHeader from "./CustomerHeader";
import EmployeeHeader from "./EmployeeHeader";
import AgentHeader from "./AgentHeader";

const RoleNav = () => {
  const customer = JSON.parse(sessionStorage.getItem("active-customer"));
  const admin = JSON.parse(sessionStorage.getItem("active-admin"));
  const agent = JSON.parse(sessionStorage.getItem("active-agent"));
  const employee = JSON.parse(sessionStorage.getItem("active-employee"));

console.log("admin",admin);
console.log("customer",customer);
console.log("agent",agent);
console.log("employee",employee);

  if (admin != null) {
    return <AdminHeader />;
  } else if (customer != null) {
    return <CustomerHeader />;
  } else if (agent != null) {
    return <AgentHeader />;
  } else if (employee != null) {
    return <EmployeeHeader />;
  } else {
    return <NormalHeader />;
  }
};

export default RoleNav;
