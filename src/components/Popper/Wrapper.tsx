import { PropChildren } from '~/types/Interface/responsiveInterface';

function Wrapper({ children }: PropChildren) {
    return <div className="w-full bg-[#d2d2d2] -mt-3 rounded py-3 px-2">{children}</div>;
}

export default Wrapper;
