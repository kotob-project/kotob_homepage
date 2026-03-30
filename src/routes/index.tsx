import { Home } from '../pages/Home'; // TOPページの中身をここに移したと想定
import { Download } from '../pages/Download';
import { Contributors } from '../pages/Contributors';

type AppRoute = {
    path: string,
    element: JSX.Element;
    isActive?: boolean;
}

const routes: AppRoute[] = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/download',
        element: <Download />
    },
    {
        path: '/contributors',
        element: <Contributors />,
    }
];

export { routes };