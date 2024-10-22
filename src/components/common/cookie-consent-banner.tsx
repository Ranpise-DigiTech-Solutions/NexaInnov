// import React, { useEffect, useState } from 'react';
// import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogOverlay, AlertDialogTitle } from '../ui/alert-dialog';
// import Cookie
// import { useUser } from '@auth0/nextjs-auth0/client';

// const CookieConsentBanner: React.FC<{ isLoggedIn: boolean }> = ({ isLoggedIn }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     // Check if the user has already accepted cookies
//     const cookieConsent = Cookies.get('cookie-consent');
//     if (!cookieConsent && !isLoggedIn) {
//       setIsOpen(true); // Show banner if not accepted and not logged in
//     }
//   }, [isLoggedIn]);

//   const handleAccept = () => {
//     // Set cookie to indicate that cookies have been accepted
//     Cookies.set('cookie-consent', 'accepted', { expires: 365 }); // Valid for 1 year
//     setIsOpen(false);
//     console.log('Cookies accepted!');
//   };

//   return (
//     <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
//       <AlertDialogOverlay />
//       <AlertDialogContent>
//         <AlertDialogTitle>Cookie Consent</AlertDialogTitle>
//         <AlertDialogDescription>
//           We use cookies to enhance your browsing experience. By clicking &apos;Accept,&apos; you consent to our use of cookies.
//         </AlertDialogDescription>
//         <div>
//           <AlertDialogCancel asChild>
//             <button onClick={() => setIsOpen(false)}>
//               Decline
//             </button>
//           </AlertDialogCancel>
//           <AlertDialogAction asChild>
//             <button onClick={handleAccept}>Accept</button>
//           </AlertDialogAction>
//         </div>
//       </AlertDialogContent>
//     </AlertDialog>
//   );
// };

// export default CookieConsentBanner;
