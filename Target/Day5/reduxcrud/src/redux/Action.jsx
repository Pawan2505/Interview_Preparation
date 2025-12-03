export const ADDUSER = "ADDUSER";
export const EDITUSER = "EDITUSER";
export const DELETEUSER = "DELETEUSER";

export const addUser = (user) => {
    return {
        type: ADDUSER,
        payload: user
    };
};

export const editUser = (user) => {
    return {
        type: EDITUSER,
        payload: user
    };
};

export const deleteUser = (id) => {
    return {
        type: DELETEUSER,
        payload: id
    };
};
