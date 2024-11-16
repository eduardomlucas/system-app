import React, { useState } from 'react';
import { ModeToggle } from './mode-toggle';
import { LogOut, MenuIcon } from 'lucide-react';
import { Button } from './ui/button';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogOverlay, AlertDialogTitle, AlertDialogTrigger } from '@radix-ui/react-alert-dialog';
import { AlertDialogFooter, AlertDialogHeader } from './ui/alert-dialog';

type MenuProps = {
    children: React.ReactNode;
};
const Menu: React.FC<MenuProps> = ({children}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [openModal, setOpenModal] = useState(false);  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = ()=>{
    localStorage.removeItem("authName");
    localStorage.removeItem("authToken");
    location.reload();
}

  return (
    <div className="relative flex">
      <div
        className={`dark:bg-zinc-900 dark:text-white shadow-xl h-screen p-4 w-64 fixed top-0 left-0 z-40 transition-transform duration-500 ease-in-out transform ${
          isOpen ? 'translate-x-0' : '-translate-x-64'
        }`}
      >
        <div className='flex gap-3 justify-between items-center'>
            <p>{`${localStorage.getItem("authName")}`}</p>
            <img className="w-[50px]" src="/home-avatar.svg"/>
            <ModeToggle/>
            <Button onClick={() => setOpenModal(true)} size={"icon"} variant={"outline"}><LogOut className='h-[1.2rem] w-[1.2rem]'/></Button>
        </div>
        
        <ul className='flex flex-col pt-3'>
          <li className="mb-2 hover:bg-zinc-200 dark:hover:bg-zinc-700 p-2 rounded">
            <a href="/">Home</a>
          </li>
          <li className="mb-2 hover:bg-zinc-700 p-2 rounded">
            <a href="/about">Sobre</a>
          </li>
          <li className="mb-2 hover:bg-zinc-700 p-2 rounded">
            <a href="/contact">Contato</a>
          </li>
        </ul>
      </div>
      
      <Button
        onClick={toggleMenu}
        className={`shadow-xl p-2 border-0 text-black bg-zinc-50 dark:bg-zinc-950 dark:text-white rounded fixed top-4 z-50 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all duration-500 ease-in-out ${
          isOpen ? 'left-64 ml-3' : 'left-4'
        }`}
      >
        <MenuIcon className={`transition-all duration-500 ${isOpen ? 'rotate-90' : 'rotate-0'}`}/>
      </Button>

      {/* Conteúdo principal */}
      <div className={`flex-1 p-8 transition-all duration-500  ${isOpen ? 'ml-64' : 'ml-16'}`}>
      <AlertDialog open={openModal} onOpenChange={setOpenModal}>
      <AlertDialogOverlay className="bg-zinc-950/50 dark:bg-zinc-50/5 fixed inset-0" />
        <AlertDialogContent  className="fixed bg-white dark:bg-zinc-950 shadow-xl  p-6 flex flex-col gap-5 items-center justify-center rounded-lg  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-md w-full">
            <AlertDialogHeader>
            <AlertDialogTitle className='text-center font-semibold'>Você tem certeza?</AlertDialogTitle>
            <AlertDialogDescription>
                Após clicar em continuar você será desconectado da sua conta.
            </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel><Button variant={'outline'}>Cancelar</Button></AlertDialogCancel>
                <AlertDialogAction><Button onClick={handleLogout}>Continuar</Button></AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
        </AlertDialog>
        {children}
      </div>
    </div>
  );
};

export default Menu;
