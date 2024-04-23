// 引入 axios 库
import axios from 'axios';

// 定义接口来表示 JSON 数据的结构
interface Data {
    // 定义 JSON 数据的结构
}

// 定义一个异步函数来获取 JSON 数据
export async function fetchData(url: string): Promise<Data> {
    try {
        // 发起网络请求
        const response = await axios.get<Data>(url);

        // 返回获取到的 JSON 数据
        return  JSON.stringify(response.data);
    } catch (error) {
        // 处理异常情况
        console.error('There was a problem with the fetch operation:', error.message);
        throw error;
    }
}
