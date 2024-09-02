import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Login() {
    return (
      <div className="max-w-72 mx-auto my-10 text-center">
        <label className="font-bold text-sm">Iniciar Sessão</label>
        <ul className="list-none mb-2 flex flex-col gap-2">
            <li>
                <Input type="email" placeholder="Escreva seu email"/>
            </li>
            <li>
                <Input type="password" placeholder="Escreva seu senha"/>
            </li>
        </ul>

        <Button>
            <Link href="#">Login</Link>
        </Button>
      </div>
    );
  }