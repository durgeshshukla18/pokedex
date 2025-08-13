
function Pokemon({name, image}){

    return (
        <>
        <div>{name}</div>
        <div><img src={image} alt="xyz" /></div>
        </>
    )


}

export default Pokemon;