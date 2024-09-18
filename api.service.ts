import { 
    Axios
} from "axios";


export class ApiService {
    public baseUrl
    public axios = Axios;
    
    constructor(params) {
        this.baseUrl = params.baseUrl;
        this.axios = params.axios ?? new Axios({
            baseURL: this.baseUrl,
            headers: {
                'Content-Type': 'application/json',
            },
        });


    }
}