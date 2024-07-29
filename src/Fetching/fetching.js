export const obtenerContactos = async () => {
    const response = await fetch(
        '/Mook.json', 
        {
            method: "GET"
        }
    )
    return  response.json()
}