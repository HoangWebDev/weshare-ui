import Header from '~/components/Header/Header';
import Nav from '~/components/Layout/MainLayout/Nav/Nav';

function MainLayout({ children }: any) {
    return (
        <div className="App">
            <Header />
            <main>
                <div className="w-screen grid grid-cols-4 gap-x-2 gap-x-5 mt-[50px] absolute inset-0 bg-[#f5f5f5] ">
                    <Nav />
                    {children}
                </div>
            </main>
        </div>
    );
}

export default MainLayout;
