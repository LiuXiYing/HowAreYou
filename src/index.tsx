
import { useEffect, useState } from "react";
import { Detail } from "@raycast/api";
import { fetchData } from "./request";
import { parseComputerInfo,ComputerInfo } from "./info";

export default function Command() {
    var [data, setData] = useState<string>("");

    useEffect(() => {
        const fetchDataAsync = async () => {
            try {
                const response = await fetchData();
                const computers: ComputerInfo[] = parseComputerInfo(JSON.parse(JSON.stringify(response)))
                setData(JSON.stringify(computers));
            } catch (error) {
                setData(JSON.stringify(error));
            }
        };
        fetchDataAsync();
    }, []);

    return <Detail markdown={data} />;
}
