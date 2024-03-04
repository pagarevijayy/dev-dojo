import { useQuery } from "@tanstack/react-query";

const baseURL = "http://localhost:3000";

type userType = {
    id: number;
    name: string;
    email: string;
    number: string;
};

const QueryDemo = () => {
    const {
        data: users,
        error,
        isPending,
    } = useQuery({
        queryKey: ["repoData"],
        queryFn: async () => {
            const res = await fetch(`${baseURL}/users`);
            const users = await res.json();
            return users;
        },
    });

    if (isPending) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    return (
        <>
            <h2>Query Demo</h2>
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
        </>
    );
};

export default QueryDemo;
