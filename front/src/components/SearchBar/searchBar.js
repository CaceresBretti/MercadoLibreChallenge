import { useEffect, useState } from "react"
import { useRouter } from "../../hooks/useRouter";

export const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const { query, history } = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/items?search=${searchQuery}`);
    }

    useEffect(() => {
        if (query.search) {
            setSearchQuery(query.search)
        }
    }, [query])

    return (
        <form className="search-bar" onSubmit={handleSubmit}>
            <input type="text" autoComplete="off" name="query" placeholder="Nunca dejes de buscar" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <button type="submit"><i className="fa fa-search"></i></button>
        </form>
    )
}