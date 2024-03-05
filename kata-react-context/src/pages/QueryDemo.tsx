import { useQuery, useMutation } from "@tanstack/react-query";
import useSetPageTitle from "../hooks/useSetPageTitle";
import ErrorBoundary from "../components/ErrorBoundary";
import { queryClient } from "../main";

const baseURL = "http://localhost:3000";

type UserType = {
    id: number;
    name: string;
    email: string;
    number: string;
};

const UserTable = ({ users }: { users: UserType[] }) => {
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
                {users.map((user: UserType) => {
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

const fetchUsers = async (): Promise<UserType[]> => {
    const res = await fetch(`${baseURL}/users`);
    return await res.json();
};

const updateUser = async (userData: Partial<UserType>): Promise<UserType> => {
    // Perform the mutation logic, e.g., make an API request to update the user
    const response = await fetch(`${baseURL}/users/${userData.id}`, {
        method: "PATCH",
        body: JSON.stringify(userData),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error("Failed to update user");
    }

    return response.json();
};

const EditUserForm = () => {
    const { isPending, mutate, error, isError } = useMutation({
        mutationFn: updateUser,
        onSuccess: (result, context) => {
            console.log("result context", result, context);
            queryClient.refetchQueries({ queryKey: ["usersTable"] });
        },
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const userData = Object.fromEntries(formData);
        // console.log("userData", userData);
        mutate(userData);
    };

    return (
        <form className="my-2 space-x-2" onSubmit={handleSubmit}>
            <h2 className="m-2">Edit User Data:</h2>
            <label htmlFor="id">
                <input
                    className="primary-input"
                    type="text"
                    placeholder="id"
                    name="id"
                    id="id"
                />
            </label>
            <label htmlFor="name">
                <input
                    className="primary-input"
                    type="text"
                    placeholder="name"
                    name="name"
                    id="name"
                />
            </label>
            <button className="btn-primary" type="submit" disabled={isPending}>
                {isPending ? "Saving..." : "Save"}
            </button>
            {isError && <div>Error: {error.message}</div>}
        </form>
    );
};

const QueryDemo = () => {
    useSetPageTitle("React Query");
    const {
        data: users,
        error,
        isPending,
    } = useQuery({
        queryKey: ["usersTable"],
        queryFn: fetchUsers,
    });

    if (isPending) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    return (
        <>
            <UserTable users={users}></UserTable>
            <EditUserForm />
        </>
    );
};

const QueryDemoErrorBoundary = () => {
    return (
        <ErrorBoundary>
            <QueryDemo />
        </ErrorBoundary>
    );
};

export default QueryDemoErrorBoundary;
