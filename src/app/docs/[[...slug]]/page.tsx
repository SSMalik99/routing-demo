export default function Docs({
    params
} : {
    params :{
        slug : string[];
    }
}
) {
    
    params.slug?.forEach(ele => {
        console.log(ele)
        
    });
    
    return <h1>Docs Page and use slug for finding length with "Catch all Segment"</h1>
    
}