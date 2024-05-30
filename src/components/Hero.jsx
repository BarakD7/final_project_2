import avatar from '../../public/owner.jpg'
import github from '../../public/github_icon.png'
import facebook from "../../public/facebook_icon.png"
import twitter from '../../public/twitter_icon.png'
import linkedIn from '../../public/linkedIn_icon.png'
import medium from '../../public/medium_icon.png'
import { setAlert, setGlobalState, useGlobalState } from '../store'
import { payToMint } from '../utils/Adulam'
import Image from 'next/image'
const Hero = () => {
  const [nfts] = useGlobalState('nfts')

  const onMintNFT = async () => {
    setGlobalState('loading', {
      show: true,
      msg: 'Minting new NFT to your account',
    })

    await payToMint()
      .then(() => setAlert('Minting Successful...', 'green'))
      .catch(() => setGlobalState('loading', { show: false, msg: '' }))
  }

  return (
    <div
      className="bg-[url('https://cdn.pixabay.com/photo/2022/03/01/02/51/galaxy-7040416_960_720.png')]
        bg-no-repeat bg-cover"
    >
      <div className="flex flex-col justify-center items-center mx-auto py-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-white text-5xl font-bold text-center">
            A.I Arts <br />
            <span className="text-gradient">NFTs</span> Collection
          </h1>

          <p className="text-white font-semibold text-sm mt-3">
            Mint and collect the hottest NFTs around.
          </p>

          <button
            className="shadow-xl shadow-black text-white
            bg-[#e32970] hover:bg-[#bd255f] p-2
            rounded-full cursor-pointer my-4 mt-8"
            onClick={onMintNFT}
          >
            Mint Now
          </button>

          <a
            href="https://daltonic.github.io/"
            className="flex flex-row justify-center space-x-2 items-center
            bg-[#000000ad] rounded-full my-4 pr-3 cursor-pointer"
          >
           
            
          </a>

          <p className="text-white text-md font-bold text-center">
            This Is My Final Year Project Based On Blockchain And NFT Minting.
          </p>

          <ul className="flex flex-row justify-center space-x-2 items-center my-4">
            <a
              className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2"
              href="https://github.com"
              target='_blank'
            >
              <Image className="w-7 h-7" src={github} alt="Github" />
            </a>
            <a
              className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2"
              href="https://www.linkedin.com"
              target='_blank'
            >
              <Image className="w-7 h-7" src={linkedIn} alt="linkedIn" />
            </a>
            <a
              className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2"
              href="https://fb.com/"
              target='_blank'
            >
              <Image className="w-7 h-7" src={facebook} alt="facebook" />
            </a>
            <a
              className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2"
              href="https://twitter.com/"
              target='_blank'
            >
              <Image className="w-7 h-7" src={twitter} alt="twitter" />
            </a>
            <a
              className="bg-white hover:scale-50 transition-all duration-75 delay-75 rounded-full mx-2"
              href="https://medium.com/"
              target='_blank'
            >
              <Image className="w-7 h-7" src={medium} alt="medium" />
            </a>
          </ul>

          <div
            className="shadow-xl shadow-black flex flex-row
            justify-center items-center w-10 h-10 rounded-full
          bg-white cursor-pointer p-3 ml-4 text-black 
            hover:bg-[#bd255f] hover:text-white transition-all
            duration-75 delay-100"
          >
            <span className="text-xs font-bold">{nfts.length}/99</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
