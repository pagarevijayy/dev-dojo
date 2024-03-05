import { useQuery } from "@tanstack/react-query";
import useSetPageTitle from "../hooks/useSetPageTitle";
import ErrorBoundary from "../components/ErrorBoundary";

const baseURL = "http://localhost:3000";

type userType = {
    id: number;
    name: string;
    email: string;
    number: string;
};

const UserTable = ({ users }: { users: userType[] }) => {
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
                {users.map((user: userType) => {
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

const fetchUsers = async (): Promise<userType[]> => {
    const res = await fetch(`${baseURL}/users`);
    return await res.json();
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
