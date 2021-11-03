import Link from "next/link";

const Maps = ({ bank, address }) => {
  return (
    <Link href={`https://maps.google.com/?q=${bank}, ${address.toLowerCase()}`}>
      <a target="_blank">
        <img
          className="inline-block w-8 ml-2"
          src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-google-maps-social-media-justicon-flat-justicon.png"
        />
      </a>
    </Link>
  );
};

export default Maps;
