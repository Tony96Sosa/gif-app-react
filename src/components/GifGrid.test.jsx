import { render, screen } from "@testing-library/react";
import { GifGrid } from "./GifGrid";
import { useFetchGifs } from "../hooks/useFetchGifs";

jest.mock("../hooks/useFetchGifs");

describe("Pruebas en <GifGrid />", () => {
  const category = "Goku";
  const gifs = [
    {
      id: "abc",
      title: "Goku",
      url: "https://localhost/goku.jpg",
    },
    {
      id: "123",
      title: "Saitama",
      url: "https://localhost/saitama.jpg",
    },
  ];
  test("Debe de mostrar el Loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando Gifs"));
    expect(screen.getByText(category));
  });

  test("Debe mostrar items cuando se cargue el array de imagenes", () => {
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
