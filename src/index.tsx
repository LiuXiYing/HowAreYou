// import { Detail } from "@raycast/api";
// import { fetchData } from "./request";
// export default function Command() {
//     var data = fetchData('http://222.19.236.142:7070/info2')
//     return <Detail markdown={{data}} />
// }

import { useEffect, useState } from "react";
import { Detail } from "@raycast/api";
import { fetchData } from "./request";
import { json } from "stream/consumers";
// import {}

export default function Command() {
    var [data, setData] = useState<string>("");
// var data = "sadsd"

    useEffect(() => {
        const fetchDataAsync = async () => {
            try {
                const response = await fetchData('http://222.19.236.142:7070/info2');
                setData(JSON.stringify(response));
                console.log(JSON.stringify(response));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchDataAsync();
    }, []);

    return <Detail markdown={data} />;
}
