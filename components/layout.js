import Navbar from './navbar';
import Footer from './footer';
import Head from "next/head";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/router';
export default function Layout({ children }) {
  const {data:session, loading} = useSession();
  const router = useRouter();
  let navbarLinks = [
    { url: '/about', title: 'About' },
    { url: '/contacts/0', title: 'Location' },
  ];
  let navbarLinksAdmin = [
    { url: '/about', title: 'About' },
    { url: '/contacts/0', title: 'Location' },
  ];
  let navbarLinksSuper = [
    { url: '/about', title: 'About' },
    { url: '/contacts/0', title: 'Location' },
    { url: '/user_screen', title: 'Users' },
  ];
  console.log(session)
  let opt=session?{ url: '/logout', title: 'Log Off' }:{ url: '/login', title: 'Registration' }
  // let opt=session?{ url: '/logout', title: 'Выйти' }:{ url: '/login', title: 'Регистрация' }
  navbarLinks.push(opt);
  navbarLinksAdmin.push(opt);
  navbarLinksSuper.push(opt);
  return (
    <div>
      <Head>

      </Head>
      {/* bg-main-bg  */}

      <main id="mainPage" className="h-screen  bg-cover bg-center containerFont text-white relative text-lg overflow-hidden overflow-y-scroll" style={{
        backgroundImage:"linear-gradient(45deg, rgb(67, 95, 221) 0%, rgb(67, 95, 221) 22%,rgb(80, 115, 203) 22%, rgb(80, 115, 203) 48%,rgb(92, 135, 185) 48%, rgb(92, 135, 185) 73%,rgb(105, 156, 167) 73%, rgb(105, 156, 167) 77%,rgb(118, 176, 149) 77%, rgb(118, 176, 149) 87%,rgb(130, 196, 131) 87%, rgb(130, 196, 131) 89%,rgb(143, 216, 113) 89%, rgb(143, 216, 113) 100%),linear-gradient(90deg, rgb(67, 95, 221) 0%, rgb(67, 95, 221) 22%,rgb(80, 115, 203) 22%, rgb(80, 115, 203) 48%,rgb(92, 135, 185) 48%, rgb(92, 135, 185) 73%,rgb(105, 156, 167) 73%, rgb(105, 156, 167) 77%,rgb(118, 176, 149) 77%, rgb(118, 176, 149) 87%,rgb(130, 196, 131) 87%, rgb(130, 196, 131) 89%,rgb(143, 216, 113) 89%, rgb(143, 216, 113) 100%),linear-gradient(67.5deg, rgb(67, 95, 221) 0%, rgb(67, 95, 221) 22%,rgb(80, 115, 203) 22%, rgb(80, 115, 203) 48%,rgb(92, 135, 185) 48%, rgb(92, 135, 185) 73%,rgb(105, 156, 167) 73%, rgb(105, 156, 167) 77%,rgb(118, 176, 149) 77%, rgb(118, 176, 149) 87%,rgb(130, 196, 131) 87%, rgb(130, 196, 131) 89%,rgb(143, 216, 113) 89%, rgb(143, 216, 113) 100%),linear-gradient(157.5deg, rgb(67, 95, 221) 0%, rgb(67, 95, 221) 22%,rgb(80, 115, 203) 22%, rgb(80, 115, 203) 48%,rgb(92, 135, 185) 48%, rgb(92, 135, 185) 73%,rgb(105, 156, 167) 73%, rgb(105, 156, 167) 77%,rgb(118, 176, 149) 77%, rgb(118, 176, 149) 87%,rgb(130, 196, 131) 87%, rgb(130, 196, 131) 89%,rgb(143, 216, 113) 89%, rgb(143, 216, 113) 100%),linear-gradient(90deg, rgb(195, 223, 84),rgb(118, 43, 234)); background-blend-mode:overlay,overlay,overlay,overlay,normal;"}}>
        <Navbar navbarLinks={(session && session.user.status ==="admin")?navbarLinksAdmin:(session && session.user.status ==="super")?navbarLinksSuper:navbarLinks} path={router.asPath} />
        {children}
        {/* <Footer /> */}
      </main>
    </div>
  );
}
