import {
    UserType,
    useGetUsersQuery,
    useAddUserMutation,
} from "../../services/api/users";

const AddUserForm = () => {
    const [addUser, { isLoading }] = useAddUserMutation();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const userData = Object.fromEntries(formData);
        // console.log("userData", userData);
        addUser(userData);
    };

    return isLoading ? (
        <p className="text-center my-2">adding user..</p>
    ) : (
        <form className="my-2 space-x-2" onSubmit={handleSubmit}>
            <h2 className="m-2">Add User:</h2>
            <label htmlFor="name">
                <input
                    className="primary-input"
                    type="text"
                    placeholder="name"
                    name="name"
                    id="name"
                    required
                />
            </label>
            <label htmlFor="email">
                <input
                    className="primary-input"
                    type="email"
                    placeholder="email"
                    name="email"
                    id="email"
                    required
                />
            </label>
            <label htmlFor="number">
                <input
                    className="primary-input"
                    type="number"
                    placeholder="number"
                    name="number"
                    id="number"
                    maxLength={10}
                    required
                />
            </label>
            <button
                className="btn-primary bg-gradient-to-br from-purple-600 to-blue-500"
                type="submit"
            >
                Save
            </button>
        </form>
    );
};

const UserTable = ({ users }: { users: UserType[] | undefined }) => {
    return (
        <table
            id="users_table"
            className="table-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
        >
            <caption className="caption-top my-2">User Data Table</caption>
            <thead>
                <tr className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <th scope="col" className="px-6 py-3">
                        id
                    </th>
                    <th scope="col" className="px-6 py-3">
                        name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        email
                    </th>
                    <th scope="col" className="px-6 py-3">
                        number
                    </th>
                </tr>
            </thead>
            <tbody>
                {users?.map((user: UserType) => {
                    return (
                        <tr
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                            key={user.id}
                        >
                            <td className="px-6 py-3">{user?.id}</td>
                            <td className="px-6 py-3">{user?.name}</td>
                            <td className="px-6 py-3">{user?.email}</td>
                            <td className="px-6 py-3">{user?.number}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

const ListUsers = () => {
    const {
        data: users,
        // error,
        isLoading,
    } = useGetUsersQuery();

    if (isLoading) return "Loading...";

    // if (error) return "An error has occurred: " + error;

    return (
        <>
            <UserTable users={users}></UserTable>
        </>
    );
};

const UsersDemo = () => {
    return (
        <div className="space-y-4 p-4 border rounded">
            <p>Users RTK Demo:</p>
            <ListUsers />
            <AddUserForm />
        </div>
    );
};
export default UsersDemo;
