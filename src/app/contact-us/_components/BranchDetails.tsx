import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { BRANCH_DATA } from "./data";

export const getGoogleMapsUrl = (location: any) => {
  // Replace spaces with '+' and encode the location for the URL
  const encodedLocation = encodeURIComponent(location.replace(/ /g, ""));
  return `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`;
};

const BranchDetails = () => {

  return (
    <div className="mb-14 flex w-full flex-col items-center justify-center gap-9">
      {BRANCH_DATA.map((data) => (
        <div
          key={data.id}
          className="flex flex-col items-center justify-center gap-10"
        >
          <div className="flex flex-col items-end justify-center">
            <p className="text-center font-inter text-2xl font-bold text-text-black">
              {data.branchName}
            </p>
            <Image
              src={"/lotties/underline.svg"}
              width={110}
              height={4}
              alt={"underline"}
            />
          </div>

          <div className="grid grid-cols-1 gap-x-20 gap-y-8 lg:grid-cols-2">
            <div className="flex w-[400px] flex-col items-center justify-center gap-6 rounded-2xl bg-white py-10 shadow-lg">
              <p className="font-inter text-2xl font-bold">Get in Touch</p>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <p className="font-inter text-sm">{data.getInTouch.mail}</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                <p className="font-inter text-sm">{data.getInTouch.phone}</p>
              </div>
            </div>

            <div className="flex w-[400px] flex-col items-center justify-center gap-6 rounded-2xl bg-white py-10 shadow-lg">
              <p className="font-inter text-2xl font-bold">Location</p>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                {/* Make the location text clickable with a Google Maps URL */}
                <a
                  href={getGoogleMapsUrl("MIDAS Stock Broking Company"+""+data.location)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-44 font-inter text-sm"
                >
                  {data.location}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BranchDetails;
