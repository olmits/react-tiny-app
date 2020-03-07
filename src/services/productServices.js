export default class ProductServices {
    
    static async getProducts(url) {
        try {
            const response = await fetch(url, {
                method: 'GET'
            })
            if (!response.ok) {
                throw new Error('Response is not ok');
            }
            return response.json();
        } catch (error) {
            alert(`Error: ${error}`);
        }
    }

    static setProductToLocalStorage(key, item){
        const localStorageContent = localStorage.getItem(key);
        
        if (localStorageContent) {
            let value = JSON.parse(localStorageContent);
            if (!Array.isArray(value)) {
                throw new Error(`Local storage content with key: ${key} and value: ${value} - ${value} should be an Array`);
            }
            if (!value.some(valueItem => (valueItem.id === item.id))) {
                value.push(item);
                localStorage.setItem(key, JSON.stringify(value));
            } 
        } else {
            let value = [];
            value.push(item);
            localStorage.setItem(key, JSON.stringify(value));
        }
    }

    static getProductsFromLocalStorage(key){
        const localStorageContent = localStorage.getItem(key);
        if (localStorageContent) {
            return JSON.parse(localStorageContent);
        } else {
            return null
        }
    }

    static removeProductFromLocalStorage(key, item){
        const localStorageContent = localStorage.getItem(key);
        
        if (localStorageContent) {
            let value = JSON.parse(localStorageContent);
            if (!Array.isArray(value)) {
                throw new Error(`Local storage content with key: ${key} and value: ${value} - ${value} should be an Array`);
            }
            let itemValueIndex = value.findIndex((valueItem) => valueItem.id === item.id);
            
            if (itemValueIndex !== -1) {
                
                value.splice(itemValueIndex, 1);
                localStorage.setItem(key, JSON.stringify(value))
            }
        }
    }
}
