import { writable } from "svelte/store";

export let storeShowModal = writable(false);

export let listClients: any = writable([]);

export let valueFumador: any = writable(1);
export let valueMascota: any = writable(1);
