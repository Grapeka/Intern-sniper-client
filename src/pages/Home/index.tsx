import React, { useState } from "react";

import AppPage from "../../layouts/AppPage";
import User from "../../types/User";

type Props = {
  user: User;
};

function Home() {
  const [user, setUser] = useState(null);
  return (
    <AppPage user={user}>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
        culpa illum deserunt esse doloribus dolorum dolorem voluptatem deleniti
      </div>
    </AppPage>
  );
}

export default Home;
