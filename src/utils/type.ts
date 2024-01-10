export type CreateUserParams = {
    username: string;
    password: string;
}

export type CreateUserProfileParams = {
    firstName: string;
    lastName: string;
    age: number;
    dob: string;
}

export type CreateUserPostParams = {
    title: string;
    description: string;
}

export type CompanyParams = {
    name: string;
    address: string;
}

export type EmployeeParams = {
    name: string;
    email: string;
}

export type DesignationParams = {
    designation: string;
}