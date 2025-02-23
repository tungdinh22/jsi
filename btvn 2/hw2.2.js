const employees = [
    { name: "John", salary: 50000, department: "IT" },
    { name: "Jane", salary: 60000, department: "HR" },
    { name: "Bob", salary: 55000, department: "HR" },
    { name: "Sophie", salary: 75000, department: "HR" },
    { name: "Mike", salary: 55000, department: "IT" },
    { name: "Emily", salary: 80000, department: "HR" },
    { name: "David", salary: 70000, department: "IT" }
];

// Nhóm nhân viên theo bộ phận
const departments = employees.reduce((acc, emp) => {
    if (!acc[emp.department]) {
        acc[emp.department] = [];
    }
    acc[emp.department].push(emp.salary);
    return acc;
}, {});

// Tính lương trung bình của từng bộ phận
const avgSalaries = Object.entries(departments).map(([department, salaries]) => {
    const avgSalary = salaries.reduce((sum, salary) => sum + salary, 0) / salaries.length;
    return { department, avgSalary };
});

// Lọc ra các phòng ban có mức lương trung bình trên 65000
const highPayingDepartments = avgSalaries.filter(dept => dept.avgSalary > 65000);

console.log(highPayingDepartments);