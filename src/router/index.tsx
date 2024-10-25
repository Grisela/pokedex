import { RouteObject } from "react-router-dom";
import AppComponent from "@/App";
import PokemonDetails from "@/views/Pokemon/Details/Details";
import PokemonTypeDetails from "@/views/Pokemon/Details/PokemonTypeDetails/Details";
import PokemonAbilitiesDetails from "@/views/Pokemon/Details/PokemonAbilitiesDetails/Details";

const routerCollection: RouteObject[] = [
  {
    path: "/",
    element: <AppComponent />,
  },
  {
    path: "/pokemon-details/:id",
    element: <PokemonDetails />,
  },
  {
    path: "/pokemon-type-details/:id",
    element: <PokemonTypeDetails />,
  },
  {
    path: "/pokemon-ability-details/:id",
    element: <PokemonAbilitiesDetails />,
  },
];
export default routerCollection;
