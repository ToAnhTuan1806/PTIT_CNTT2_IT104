interface Person{
    name: string,
    age: number
}

interface Employee{
    employeeId: string, 
    department: string
}

type StaffMember= Person&Employee;
function printStaffInfo(staff: StaffMember): void{
    console.log(`Nhan vien: ${staff.name} (${staff.age} tuoi), Ma nhan vien: ${staff.employeeId} - Phong: ${staff.department}`);
}

let staff1: StaffMember = {
    name: "Nguyễn Văn A",
    age: 28,
    employeeId: "EMP001",
    department: "Kế toán"
};
printStaffInfo(staff1)

