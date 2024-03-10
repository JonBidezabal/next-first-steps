import {NavBar} from '@/components'
export default function GenLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col">
    <NavBar />
    {children}
    </main>
  );
}