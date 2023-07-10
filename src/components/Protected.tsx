import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

type Props = {
  children: React.ReactElement;
};

export default function Protected({ children }: Props): JSX.Element | null {
  const { session } = useAuth();
  if (!session.email) {
    return <Navigate to="/notFound" replace />;
  }
  return <>{children}</>;
}
