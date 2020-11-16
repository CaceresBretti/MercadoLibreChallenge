import { useEffect, useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import Header from "../../components/Header"
import SearchResultItem from "../../components/SearchResultItem";
import config from "../../config";
import { useFetch } from "../../hooks/useFetch";
import { useRouter } from "../../hooks/useRouter"
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Preloader } from "../../components/Preloader/preloader";

export const SearchResultsPage = () => {

    const { query } = useRouter();
    const [url, setUrl] = useState('');
    const [callApi, setCallApi] = useState(false);
    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);

    const { loading, data } = useFetch(url, 'GET', callApi, true);

    useEffect(() => {
        if (query.search) {
            setUrl(`${config.apiUri}/items?q=${query.search}`);
            setCallApi(true);
        }
    }, [query])

    useEffect(() => {
        if (data) {
            setItems(data.items)
            setCategories(data.categories)
        }
    }, [data])

    return (
        <>
            {query.search ? <Helmet>
                <title>Resultados de la búsqueda: {query.search} </title>
                <meta name="description" content={'Resultados de la búsqueda: ' + query.search} />
            </Helmet> : <Helmet>
                    <title>Mercado libre</title>
                    <meta name="description" content="Mercado libre" />
                </Helmet>}
            <Header />
            <main>
                <div className="container">
                    {loading ? <Preloader /> :
                        <>
                            <Breadcrumbs categories={categories} />
                            <div className="row card">
                                {items.map(item => {
                                    return (
                                        <Link key={item.id} to={categories.length > 0 ? `/items/${item.id}?category=${categories[0]}` : `/items/${item.id}`}>
                                            <SearchResultItem
                                                title={item.title}
                                                picture={item.picture}
                                                price={item.price}
                                            />
                                        </Link>
                                    )
                                })}
                            </div>
                        </>
                    }
                </div>
            </main>
        </>

    )
}