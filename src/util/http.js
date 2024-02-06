export async function fetchAccordionDetails(){
    const response=await fetch("https://reqres.in/api/users ");
    const resData= await response.json();
    if(!response.ok){
        const error=new Error("failed to fetch the accordion details");
        error.code=response.status;
        error.info=await response.json();
        throw error;
    }
    return resData;
    
}