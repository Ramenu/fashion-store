let hasAdminRole = false;

export const isAdmin = () => {return hasAdminRole};

export const RoleWrapper = ({children, role}) => {
    if (role === "User")
    {
        return children;
    }
    else if (role === "Admin")
    {
        hasAdminRole = true;
        return children;
    }
    return null;
}