import Admin from "@/pages/admin/Admin";
import RegisterAdmin from "@/pages/admin/register/RegisterAdmin";
import Solicitud from "@/pages/admin/solicitudRegistro/Solicitud";

export default function Home() {
  

  return (
    <main>
      <Admin/>
      <RegisterAdmin/>
      <Solicitud/>
    </main>
  )
}