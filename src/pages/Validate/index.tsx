import React, { useState } from "react";
import AppPage from "../../layouts/AppPage";
import ValidateTable from "../../components/ValidateTable/ValidateTable";

export default function Validate() {
  const [user, setUser] = useState(null);
  return (
    <AppPage user={user}>
      <ValidateTable />
    </AppPage>
  );
}
