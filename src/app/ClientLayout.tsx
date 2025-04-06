'use client';
import EmergencyNotification from '@/components/EmergencyNotification';
import QuickChat from '@/components/QuickChat';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <EmergencyNotification />
      <QuickChat />
    </>
  );
}
