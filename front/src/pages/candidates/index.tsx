import PageHead from '@/components/shared/page-head';
import CandidateTable from './components/students-table';
import { DataTableSkeleton } from '@/components/shared/data-table-skeleton';
import { Breadcrumbs } from '@/components/shared/breadcrumbs';
import { useState } from 'react';

export default function StudentPage() {
  // const [Loading, setLoading] = useState(true);

  // if (Loading) {
  //   return (
  //     <div className="p-5">
  //       <DataTableSkeleton
  //         columnCount={10}
  //         filterableColumnCount={2}
  //         searchableColumnCount={1}
  //       />
  //     </div>
  //   );
  // }

  return (
    <div className="p-4 md:p-8">
      <PageHead title="Student Management | App" />
      <Breadcrumbs
        items={[
          { title: 'Dashboard', link: '/' },
          { title: 'Students', link: '/students' }
        ]}
      />
      <CandidateTable />
    </div>
  );
}
