export default function Layout({ children }: {
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-col items-center justify-start min-h-screen">

            <h1>Test Prisma Messages</h1>
            <div>
                {children}
            </div>

        </div>
    )
}