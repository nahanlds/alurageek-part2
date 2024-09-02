import Image from "next/image";
import Logo from "/public/Logo.svg";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
    return (
        <footer className="absolute bottom-0 w-full py-4 bg-sky-100 grid justify-around justify-items-center gap-6 md:grid-cols-2">
            <div className="text-center flex flex-col gap-3">
                <Image 
                    src={Logo}
                    alt="Logo"
                />

                <ul className="list-none flex flex-col gap-2">
                    <li>
                        <Link href="#">Quem Somos nós</Link>
                    </li>
                    <li>
                        <Link href="#">Politica de privacideda</Link>
                    </li>
                    <li>
                        <Link href="#">Programa de fidelidade</Link>
                    </li>
                    <li>
                        <Link href="#">Nossas Lojas</Link>
                    </li>
                    <li>
                        <Link href="#">Quero ser franqueado</Link>
                    </li>
                    <li>
                        <Link href="#">Anuncie aqui</Link>
                    </li>
                </ul>
            </div>

            <div className="flex flex-col gap-3">
                <label className="font-bold text-sm">Fale conosco</label>
                <Input placeholder="Nome"/>
                <Input placeholder="Escreva sua mensagem"/>
                <Button className="bg-sky-500 w-2/3">Enviar mensagem</Button>
            </div>

            <p className="md:col-span-2 font-semibold">Desenvolvido por Nathan 2024</p>
        </footer>
    )
}