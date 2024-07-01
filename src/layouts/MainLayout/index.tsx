import Header from '~/layouts/components/Header/Header';
import Nav from '~/layouts/MainLayout/Nav/Nav';
import { PropChildren } from '~/types/Interface/childrenInterface';

function MainLayout({ children }: PropChildren) {
    return (
        <div>
            <Header />
            <main>
                <div className="w-screen grid grid-cols-4 gap-x-5 mt-[50px] absolute inset-0 bg-[#f5f5f5]">
                    <Nav />
                    {children}
                </div>
            </main>
        </div>
    );
}

export default MainLayout;
