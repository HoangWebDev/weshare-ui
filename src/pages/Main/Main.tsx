import Nav from '~/components/Nav/Nav';
import Feed from '~/pages/Feed/Feed';
import Friend from '~/pages/Friend/Friend';
import { Route, Routes } from 'react-router-dom';
import Shop from '~/pages/Shop/Shop';

function Main() {
    return (
        <main>
            <div className="w-screen grid grid-cols-4 gap-x-2 gap-x-5 mt-[50px] absolute inset-0 bg-[#f5f5f5] ">
                <Nav />
                <Routes>
                    <Route path="/" element={<Feed />} />
                    <Route path="/feed" element={<Feed />} />
                    <Route path="/friend" element={<Friend />} />
                    <Route path="/shop" element={<Shop />} />
                </Routes>
            </div>
        </main>
    );
}

export default Main;
