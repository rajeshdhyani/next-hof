import Image from 'next/image';
import Card from "../components/ui/Card"

export default function Newjoiners(props) {
  return (
    <>
    <Card header={props.title} className="border border-grey-300 bg-white w-lg mt-4 pt-4">
        <div className="flex flex-row pt-4 bg-white w-auto md:w-auto justify-items-start px-4 py-4 ">
          <div className="border-2 rounded-full w-16 h-16 border-gray-200 relative">
          <Image
            src={props.image}
            className="rounded-full"
            width="60"
            height="60"
            objectFit="cover"
            alt={props.title}
          />
          </div>
          <div className="m-2 ml-4 text-xs place-self-center capitalize">{props.text.length > 60 ? props.text.substr(0, 60) + '...' : props.text}</div>
        </div>
      </Card>
    </>
  );
}

