import { getGifs } from "./getGifs";

describe("Pruebas en getGifs()", () => {
  test("Debe retornar un array de gifs", async () => {
    const gifs = await getGifs("homero");
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
