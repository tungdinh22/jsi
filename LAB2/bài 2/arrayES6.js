-----------------
const employees = [
  { name: "John", salary: 50000, department: "IT" },
  { name: "Jane", salary: 60000, department: "HR" },
  { name: "Bob", salary: 55000, department: "IT" },
  { name: "Sophie", salary: 75000, department: "HR" },
  { name: "Mike", salary: 65000, department: "IT" },
  { name: "Emily", salary: 80000, department: "HR" },
  { name: "David", salary: 70000, department: "IT" }
];
//----------------------------
// lọc phòng ban
console.group("HR department");
const hrDep = employees.filter((staff) => staff.department == "HR");
console.log("HR staff list:", hrDep);
// tinh tong salary
const totalSalaryHR = hrDep.reduce((prev, cur) => prev + cur.salary, 0);
// tinh trung binh
const avgSalaryHR = Math.round((totalSalaryHR / hrDep.length) * 100) / 100;
console.log("Luong trung binh:", avgSalaryHR);
console.groupEnd();
----------------
// IT ....

// Mang chua phong ban muc luong TB > 65000
const overAvg = [avgSalaryHR].filter((avg) => avg > 65000);
console.log("Phòng ban có mức lương trung bình cao hơn 65k:", overAvg);