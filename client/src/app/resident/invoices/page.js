// peekachiu/ddac-webapplication/DDAC-WebApplication-jiayuan/client/src/app/invoices/page.js
'use client'

import { useAuth } from '../../AuthContext';
import ResidentInvoiceReceipt from '../../components/ResidentInvoiceReceipt';

export default function InvoicesPage() {
  const { currentUser } = useAuth();
  if (!currentUser) return <div>Loading...</div>;

  if (currentUser.role === 'Admin') {
    return <div>Access Denied. This page is for residents only.</div>;
  }

  return <ResidentInvoiceReceipt user={currentUser} />;
}