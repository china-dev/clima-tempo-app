import axios from "axios";

async function testando () {
    const response = await axios.get(`http://localhost:8080/weather?city=São Paulo`);
    return response.data;
}

export function teste () {
    console.log('nem fodendo');
    
    return { testando };
}
