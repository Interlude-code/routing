import Image from "next/image";
import { Inter } from "next/font/google";
import { FormEvent } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)


    const formDataObject: any = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });

    console.log(formDataObject);
    
    const response = await fetch('/api/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formDataObject)
    })
 
    // // Handle response if necessary
    // const data = await response.json()
    // // ...
  }
  
  return (
    <main>
      <form className="container mt-10" onSubmit={onSubmit}>
        <div className="flex flex-col items-center gap-2">
          <label className="text-2xl">Fecha</label>
          <input type="date" className="border px-5" name="date" required/>
          <label className="text-2xl">Sitio</label>
          <input type="text" className="border" name="place" required />
          <label className="text-2xl">Cliente</label>
          <input type="text" className="border" name="customer" required />
          <label className="text-2xl">Observación</label>
          <textarea className="border w-64 h-72" name="comments" required/>
          <button type="submit" className="border bg-black text-white px-4 py-2 text-2xl" >Guardar</button>
        </div>
      </form>
    </main>
  );
}
