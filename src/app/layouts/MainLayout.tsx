import React, { ReactNode, useEffect } from "react";
import Header from "../../components/Header.tsx";
import { useAppDispatch } from "../../hooks/useAppDispatch";

type Props = {
  children: ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch();

  // Check if user is already authenticated if yes initiate login
  useEffect(() => {}, [dispatch]);

  return (
    <React.Fragment>
      <Header />
      <main>{children}</main>
    </React.Fragment>
  );
};

export default MainLayout;
