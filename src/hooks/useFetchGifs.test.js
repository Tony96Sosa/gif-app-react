import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "./useFetchGifs";

describe("Pruebas en el Hook useFetchGifs", () => {
  test("Debe de retornar array de imagenes vacio y isLoading true", () => {
    const { result } = renderHook(() => useFetchGifs("goku"));
    const { images, isLoading } = result.current;
    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("Debe de retornar array de imagenes y isLoading false", async () => {
    const { result } = renderHook(() => useFetchGifs("goku"));
    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0),
      {
        timeout: 6000,
      }
    );
    const { images, isLoading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
