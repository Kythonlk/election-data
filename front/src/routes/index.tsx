import FormPage from '@/pages/form';
import NotFound from '@/pages/not-found';
import { Suspense, lazy } from 'react';
import { Navigate, Outlet, useRoutes } from 'react-router-dom';

const DashboardLayout = lazy(
  () => import('@/components/layout/dashboard-layout')
);
const DashboardPage = lazy(() => import('@/pages/dashboard'));
const CandidatePage = lazy(() => import('@/pages/candidates'));
const DistrictsPage = lazy(() => import('@/pages/district'));
const OffencesPage = lazy(() => import('@/pages/offences'));
// const StudentDetailPage = lazy(
//   () => import('@/pages/students/StudentDetailPage')
// );

// ----------------------------------------------------------------------

export default function AppRouter() {
  const dashboardRoutes = [
    {
      path: '/',
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        {
          element: <DashboardPage />,
          index: true
        },
        {
          path: 'form',
          element: <FormPage />
        },
        {
          path: 'candidates',
          element: <CandidatePage />
        },
        {
          path: 'districts',
          element: <DistrictsPage />
        },
        {
          path: 'offences',
          element: <OffencesPage />
        }
      ]
    }
  ];

  const publicRoutes = [
    {
      path: '/404',
      element: <NotFound />
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />
    }
  ];

  const routes = useRoutes([...dashboardRoutes, ...publicRoutes]);

  return routes;
}
