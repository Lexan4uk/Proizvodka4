import '@styles/pages/Actions.scss';
import { simpleGet, apiTags } from "@api/simpleGet"
import { useParams } from 'react-router-dom';

import useSWR from 'swr';
import objectNormalizer from '@scripts/helpers/objectNormalizer';
import getSvg from '@images/svg'


function Action() {
    const { id } = useParams();
    const { data: promotion, error, isLoading } = useSWR(apiTags.promotionById(id), simpleGet);
    console.log(promotion)
    
    return (
        <>
        <h1>{promotion?.item?.title}</h1>
        </>
    )
}
export default Action;