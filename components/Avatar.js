// next iamge
import Image from "next/image";

const Avatar = () => {
  return (
    <section className="hidden xl:flex xl:max-w-none">
      <Image
        src={'/avatar.png'}
        width={737}
        height={678}
        alt=''
        className="translate-z-0 w-full h-full"
      />
    </section>
  )
};

export default Avatar;
