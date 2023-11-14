import { useEffect, useState } from 'react';
import './TestPage.css'
import { getItem } from '../../utils/API';
import { useParams } from 'react-router-dom';

const TestPage = () => {
    const [itemInfo, setInfo] = useState({
        _id: "",
        date_created: "",
        image: "",
        name: "",
        owner: "",
        price: 0,
        quantity: 0
    });

    const { itemId } = useParams();

    const functionCall = async () => {
        const item = await getItem(itemId);
        setInfo(item)
        console.log(item);
    }

    useEffect(() => {functionCall()}, [])

    return (
        <>
            <div>
                Test
            </div>
        </>
    );
}

export default TestPage;