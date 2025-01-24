export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <div className="flex flex-col items-center py-16 px-10 h-screen">
            {children}
        </div>
    )

}