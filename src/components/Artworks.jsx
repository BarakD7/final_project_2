import ethlogo from "../../public/ethlogo.png"
import { useEffect, useState } from 'react'
import Image from "next/image"
import Link from "next/link"
const Artworks = ({ artworks }) => {

  const [end, setEnd] = useState(4)
  const [count] = useState(4)

  const [nfts, setNfts] = useState([])

  const getNfts = () => {
    return artworks.slice(0, end)
  }

  useEffect(() => {
    setNfts(getNfts())
  }, [artworks, end])

  return (
    <div className="bg-[#131835] py-10">
      <div className="w-4/5 mx-auto">
        <h4 className="text-gradient uppercase text-2xl">Artworks</h4>

        <div className="flex flex-wrap justify-center items-center mt-4">
          {nfts.map((nft, i) => (
            <Link
              key={i}
              href={nft.url}
              target="_blank"
              className="relative shadow-xl shadow-black p-3
                bg-white rounded-lg item w-64 h-64 object-contain 
                bg-no-repeat bg-cover overflow-hidden mr-2 mb-2 cursor-pointer
                transition-all duration-75 delay-100 hover:shadow-[#bd255f]"
                style={{ backgroundImage: `url(https://media.licdn.com/dms/image/D4E12AQEMkfyzABbJJA/article-cover_image-shrink_720_1280/0/1708611148395?e=2147483647&v=beta&t=vm1XFOlNSZWGtMMuhCD-C4yzi-yrWTs6bNU5R555Lng)` }}
            >
              <div
                className="absolute bottom-0 left-0 right-0
                  flex flex-row justify-between items-center
                  label-gradient p-2 w-full text-white text-sm"
              >
                <p>{`NFT #${nft.id}`}</p>
                <div className="flex justify-center items-center space-x-2">
        
                  <Image
                    className="w-5 cursor-pointer"
                    src={ethlogo}
                    alt={`NFT collection #` + nft.id}
                  />
                  {nft.cost}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {artworks.length > 0 && artworks.length > nfts.length ? (
          <div className="flex flex-row justify-center items-center mx-auto mt-4">
            <button
              className="shadow-xl shadow-black text-white
              bg-[#e32970] hover:bg-[#bd255f] p-2
              rounded-full cursor-pointer my-4"
              onClick={() => setEnd(end + count)}
            >
              Load more
            </button>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Artworks
