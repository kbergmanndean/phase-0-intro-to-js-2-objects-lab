// Write your solution in this file!
const employee= {
    name: "Emilio",
    streetAddress:"11 Broadway St."
}

function updateEmployeeWithKeyAndValue(employee,key,value) {
    return Object.assign({},employee,{[key]:value});
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value) {
    return Object.assign(employee,{[key]:value});
}
function deleteFromEmployeeByKey(employee,key) {
    const newEmployee={...employee};
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee,key) {
    delete employee[key];
    return employee;
}

