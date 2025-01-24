export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col items-center py-16 h-screen">
          
                {children}
          

        </div>
    )
}