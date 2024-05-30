import ethlogo from "../../public/ethlogo.png";
import { connectWallet } from "../utils/Adulam";
import { truncate, useGlobalState } from "../store";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  const [connectedAccount] = useGlobalState("connectedAccount");

  return (
    <>
      

      <nav className="w-4/5 flex md:justify-center justify-between items-center py-4 mx-auto">
        <div className="flex flex-row justify-start items-center md:flex-[0.5] flex-initial">
          <Image
            className="w-8 cursor-pointer"
            src={ethlogo}
            alt="Adulam Logo"
          />
          <span className="text-white text-2xl ml-2">Final_Project</span>
        </div>

        <ul
          className="md:flex-[0.5] mr-10 text-white 
        md:flex hidden list-none flex-row 
         items-center flex-initial"
        >
          <Link href="/ai">
            <div className="flex justify-center items-center font-medium p-2 text-white text-xl">
              <li className="mx-4 cursor-pointer">Consult With AI</li>
            </div>
          </Link>
        </ul>

        {connectedAccount ? (
          <button
            className="shadow-xl shadow-black text-white 
        bg-[#e32970] hover:bg-[#bd255f] md:text-xs p-2
        rounded-full cursor-pointer"
          >
            {truncate(connectedAccount, 4, 4, 11)}
          </button>
        ) : (
          <button
            className="shadow-xl shadow-black text-white 
        bg-[#e32970] hover:bg-[#bd255f] md:text-xs p-2
        rounded-full cursor-pointer"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
        )}
      </nav>
    </>
  );
};

export default Header;
