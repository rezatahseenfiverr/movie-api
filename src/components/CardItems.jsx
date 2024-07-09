import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

export default function CardItems({moviesInfo}) {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{moviesInfo.original_language}</p>
        <small className="text-default-500">{moviesInfo.release_date}</small>
        <h4 className="font-bold text-large">{moviesInfo.title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={`https://image.tmdb.org/t/p/w500/${moviesInfo.backdrop_path}`}
          width={270}
        />
      </CardBody>
    </Card>
  );
}
