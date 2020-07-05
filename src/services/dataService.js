
export default class DataService {

    _apiBase = 'http://localhost:3000';

    getResource = async (url) => {

        const response = await fetch(`${this._apiBase}${url}`);

        if (!response.ok) {

            throw new Error(`Could not fetch ${url}` + 
                `, received ${response.status}`);
        }

        const result = await response.json();

        return result;
    }

    isSet = (data) => {

        if (data) {

            return data;

        } else {

            return 'нет данных';
        }
    }

    _transformData = (item) => {

        return {

            id: this.isSet(item.id),
            title: this.isSet(item.title),
            tiker: this.isSet(item.tiker),
            sector: this.isSet(item.sector),

        };
    }

    getFundsUSA = async () => {

        const result = await this.getResource(`/CompanyUSA/`);
        // return response.map(this._transformData);
        return result;
    }

    getCompany = async (id) => {
        const company = await this.getResource(`/CompanyUSA/${id}/`);
        // return this._transformBook(company);
        return company;
    }
}





//     url = 'http://localhost:3000/CompanyUSA';

//     getFundsUSA = async () => {

//         const response = await fetch(this.url);
//         if (!response.ok){
//             throw new Error('Server Error');
//         }
//         const result = await response.json();
//         return result;
//     }
// }



// export default class DataService {

//     constructor() {
//         this._apiBase = 'http://localhost:3000';
//     }

//     async getResource(url) {
//         const res = await fetch(`${this._apiBase}${url}`);
//         if (!res.ok) {
//             throw new Error(`Could not fetch ${url}` + 
//                 `, received ${res.status}`);
//         }
//         console.log(res.json())
//         return await res.json();

//     }

//     getAllFundsUSA = async () => {
//         const res = await this.getResource(`/fundsUSA/`);
//         return res.map(this._transformData);
//     }

//     getCompany = async (id) => {
//         const company = await this.getResource(`/fundsUSA/${id}/`);
//         return this._transformBook(company);
//     }











    

    
//     //     async getMenuItems () {
//     //         return await this.getResource('/menu/');
//     //     }
    
//     //     async getItem(id) {
//     //         const res = await this.getResource('/menu/');
//     //         console.log(res);
//     //         const item = res.find( (el) => {
//     //             console.log(`el.id: ${el.id}, id: ${id}`);
//     //             return el.id === +id;
//     //         }) 
//     //         console.log(item);
//     //         return item;
//     //     }
    
//     //     async setOrder(order) {
//     //         const number = await this.getOrderNumber();
//     //         const newOrder = {
//     //             id: number,
//     //             order: order
//     //         }
//     //         const response = await fetch(`${this._apiBase}/orders`, {
//     //             method: 'POST', 
//     //             headers: {
//     //                 'Content-Type': 'application/json;charset=utf-8'
//     //             },
//     //             body: JSON.stringify(newOrder)
//     //         });
//     //         if (!response.ok){
//     //             throw new Error('json error'); 
//     //         }
//     //     }
    
//     //     async getOrderNumber(){
//     //         const res = await this.getResource('/orders/');
//     //         const orderNumber = res.length+1;
    
//     //         return orderNumber
//     //     }
//     // }




// }

