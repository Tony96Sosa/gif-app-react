import { render, screen } from "@testing-library/react";
import { GifItem } from "./GifItem";

describe("Prueba en <GifItem/>", () => {
  const title = "Goku";
  const url = "https://dragon-ball.com/Goku.jpg";

  test("Deberia matchear con su snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar el alt y src indicados", () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug();
    const { alt, src } = screen.getByRole("img");
    expect(alt).toBe(title);
    expect(src).toBe(url);
  });

  test("Debe de mostrar el titulo en el componente", () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
