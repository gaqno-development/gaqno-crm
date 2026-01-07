import { AuthProvider, QueryProvider, TenantProvider } from "@gaqno-development/frontcore";
import React from "react";


export default function App() {
  return (
    <QueryProvider>
    <AuthProvider>
      <TenantProvider>
        <div className="p-6">
          <h1 className="text-3xl font-bold">CRM Module</h1>
          <p className="text-muted-foreground mt-2">
            CRM functionality coming soon...
          </p>
        </div>
      </TenantProvider>
    </AuthProvider>
  </QueryProvider>
  );
}
