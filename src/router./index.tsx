import { RouteObject } from "react-router-dom";
import AppComponent from "@/App";
import PokemonDetails from "@/views/Pokemon/Details/Details";

const routerCollection: RouteObject[] = [
  {
    path: "/",
    element: <AppComponent />,
  },
  {
    path: "/pokemon-details/:id",
    element: <PokemonDetails />,
  },
];
export default routerCollection;
