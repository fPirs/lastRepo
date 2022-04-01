
const apiRequest = async () =>{
   let arr1 = [];
    const request = await fetch('https://api.covid19api.com/summary');
    console.log(request);
    const resRequest = await request.json();
    console.log(resRequest);
    resRequest.Countries.forEach(el=> {
        
        
    });
};
apiRequest();