import UsersDemo from "../components/usersDemo";
import { useGetPokemonByNameQuery } from "../services/api/pokemon";

const RTKQueryDemo = () => {
    const { data, error, isLoading } = useGetPokemonByNameQuery("bulbasaur");

    return (
        <div className="space-y-4">
            <div className="space-y-4 p-4 border rounded">
                <p>Fetched Pokemon Details:</p>
                <div>
                    {error ? (
                        <>Oh no, there was an error</>
                    ) : isLoading ? (
                        <>Loading...</>
                    ) : data ? (
                        <div className="flex gap-4 text-center">
                            <section className="border rounded-lg py-2 px-6">
                                <img
                                    src={data.sprites.front_shiny}
                                    alt={data.species.name}
                                />
                                <h3 className="">{data.species.name}</h3>
                            </section>
                        </div>
                    ) : null}
                </div>
            </div>
            <UsersDemo />
        </div>
    );
};
export default RTKQueryDemo;
