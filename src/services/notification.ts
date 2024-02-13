import axios from "axios";
import Notification from "../interfaces/notification";

class NotificationService {
    http = axios.create({
        baseURL:'https://jsonplaceholder.typicode.com/'
    })

    async getNotifications(){
       const response = await this.http.get<Notification[]>('/todos')
       return response.data
    }

    async addNotification(title:string){
       const response = await this.http.post<Notification>('/todos',{title})
       return response.data
    }

    async removeNotification(id:number){
       const response  = await this.http.delete('/todos/' + id)
       return response.data
    }
}

export default new NotificationService()