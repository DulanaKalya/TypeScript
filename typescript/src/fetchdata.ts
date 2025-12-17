import {z} from 'zod';

const tourSchema = z.object({
    id:z.string(),
    name:z.string(),
    info:z.string(),
    image:z.string(),
    price:z.string()
})

type Tourr1 = z.infer<typeof tourSchema>

console.log("Hi")
const url = 'https://www.course-api.com/react-tours-project';



type Tour = {
    id:string;
    name:string;
    info:string;
    image:string;
    price:string;
    //something:string;
}


async function fetchData(url:string):Promise<Tour[]> {
    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`HTTP error! status:${response.status}`);
        }
        const data:Tour[] = await response.json();
        console.log(data);

        return data;
    }catch(error){
        const errorMsg= 
        error instanceof Error ? error.message : 'there was an error...';
        console.log(errorMsg);
        return [];

    }

}

fetchData(url);


const tours = await fetchData(url);
tours.map((tour:any)=>{
    console.log(tour.name)
})

