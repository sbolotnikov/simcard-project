import { signOut, useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AlertMenu from '../components/alertMenu';
function logout() {
    const { data: session, status } = useSession();
    const [revealAlert, setRevealAlert] = useState(false);
    const [alertStyle, setAlertStyle] = useState({});
    const router = useRouter();
    useEffect(() => {
      if (!session) return router.push('/');
      setAlertStyle({
        variantHead: 'danger',
        heading: 'Attention!',
        text: `You are about to log off?`,
        color1: 'danger',
        button1: 'Confirm',
        color2: 'secondary',
        button2: 'Cancel',
      });
      setRevealAlert(true);
    }, []);
    const onReturn = async(choice) => {
        setRevealAlert(false);
        if (choice==="Confirm") signOut();
        return router.push('/');
        
      }
    return (
        <div>
     {revealAlert && <AlertMenu onReturn={onReturn} styling={alertStyle} />}           
        </div>
    )
}

export default logout
