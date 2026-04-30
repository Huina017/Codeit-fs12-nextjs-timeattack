import Header from "@/app/components/Header";

export default function MainLayout({ children }) {
    return (
        <div>
            <Header />
            <main>
                {children}
            </main>
        </div>
    );
}