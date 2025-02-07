




export default async function Page({ params }: {
    params: Promise<{ commentId: string }>
}) {


    const { commentId } = await params


    return <div>
        <h1 className="text-3xl">{commentId}</h1>
    </div>
}