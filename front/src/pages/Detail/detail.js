import { useEffect, useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import DetailItem from "../../components/DetailItem";
import Header from "../../components/Header"
import config from "../../config";
import { useFetch } from "../../hooks/useFetch";
import { useRouter } from "../../hooks/useRouter"
import { Helmet } from 'react-helmet';
import { Preloader } from "../../components/Preloader/preloader";


export const DetailPage = () => {

    const [url, setUrl] = useState('');
    const [callApi, setCallApi] = useState(false);
    const [item, setItem] = useState();

    const { loading, data } = useFetch(url, 'GET', callApi, true);
    const { query } = useRouter();


    useEffect(() => {

        if (query.id) {
            setUrl(`${config.apiUri}/items/${query.id}`);
            setCallApi(true);
        }

    }, [query])

    useEffect(() => {
        if (data) {
            setItem(data.item)
        }
    }, [data])

    return (
        <>
            {item && <Helmet>
                <title>{item.title + " - Mercado Libre"}</title>
                <meta name="description" content={item.description + " - Mercado Libre"} />
            </Helmet>}
            <Header />
            <main>
                <div className="container">
                    {loading ? <Preloader /> :
                        item && <>
                            {query.category && <Breadcrumbs categories={[query.category, item.title]} />}
                            <div className="row card">
                                <DetailItem
                                    title={item.title}
                                    price={item.price}
                                    picture={item.picture}
                                    condition={item.condition}
                                    description={item.description}
                                    sold_quantity={item.sold_quantity} />
                            </div></>}
                </div>
            </main>
        </>

    )
}