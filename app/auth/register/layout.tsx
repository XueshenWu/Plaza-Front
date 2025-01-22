export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
           Register
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                {children}
            </div>

        </div>
    )
}