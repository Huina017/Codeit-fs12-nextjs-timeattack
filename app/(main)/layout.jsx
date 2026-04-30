import Header from "@/app/components/common/Header";

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