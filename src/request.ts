// 引入 axios 库
import axios from 'axios';

// 定义接口来表示 JSON 数据的结构
interface Data {
    // 定义 JSON 数据的结构
}

// 定义一个异步函数来获取 JSON 数据
export async function fetchData(): Promise<Data> {
    try {
        // 发起网络请求
        var url = 'http://222.19.236.142:7070/info2'
        const response = await axios.get<Data>(url);
        
        // 返回获取到的 JSON 数据
        return  JSON.stringify(response.data);
    } catch (error) {
        // 处理异常情况

        var msg = '去找过文彬了，他说这个问题不是他的问题，是你的问题，你去找他吧！'
        throw msg;
    }
}
