import { ReactNode } from "react";
import { RouteObject } from "react-router-dom";

export type AppRoute = RouteObject & {
    path: string;
    element: ReactNode;
    children?: AppRoute[];
};