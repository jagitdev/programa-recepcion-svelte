export let habitaciones: any = [];
export async function obtenerHabitacionesFumadorMascota(
  fumador: any,
  permiteAnimal: any
) {
  try {
    // Construye la URL con los parámetros variables
    const URL = `http://localhost:8080/api/v1/habitaciones?fumador=${fumador}&permiteAnimal=${permiteAnimal}`;

    // Realiza una solicitud GET utilizando fetch
    const response = await fetch(URL, {
      method: "GET",
      mode: "cors",
      cache: "default",
    });

    if (response.ok) {
      // Si la respuesta es exitosa, obtén los datos JSON y almacénalos en una variable
      const data = await response.json();
      return (habitaciones = data); // Cambié $listRoomsFumadorMascota a listRoomsFumadorMascota
      console.log(habitaciones);
    } else {
      // Si la respuesta no es exitosa, muestra un mensaje de error
      console.error("Error al obtener las habitaciones:", response.status);
    }
  } catch (error) {
    // Maneja errores de red u otros errores que puedan ocurrir durante la solicitud
    console.error("Error de red al obtener las habitaciones:", error);
  }
}
