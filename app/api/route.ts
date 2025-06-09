export const GET = async (request:Request, response: Response) => {
    console.log(request)
    return new Response(JSON.stringify({msg: "hello there"}))
}