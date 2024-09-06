/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import data from "../../data.json";
import { Button } from "../ui/button";
import { IoCheckmark } from "react-icons/io5";
import Image from "next/image";

export default function CardPricesYear() {
  const [currency, setCurrency] = useState("EUR");

  // Fonction pour convertir le prix
  const convertPrice = (price: string): number | string => {
    const cleanPrice = price.replace(/\s/g, ""); // Supprime les espaces dans la chaîne
    const priceInEuros = parseFloat(cleanPrice); // Convertit la chaîne nettoyée en nombre

    if (isNaN(priceInEuros)) {
      return "Prix invalide";
    }

    switch (currency) {
      case "USD":
        return (priceInEuros * 1.1).toFixed(2);
      case "GBP":
        return (priceInEuros * 0.85).toFixed(2);
      default:
        return priceInEuros;
    }
  };

  // Fonction pour obtenir le symbole de la devise
  const getCurrencySymbol = () => {
    switch (currency) {
      case "USD":
        return "$";
      case "GBP":
        return "£";
      default:
        return "€";
    }
  };

  return (
    <section className="flex flex-col justify-center items-center my-10">
      <div className="flex gap-4 mb-6">
        <Button
          className=" w-24 bg-[radial-gradient(51.41%_105.14%_at_50.04%_105.14%,rgba(10,48,139,1)_0%,rgba(30,110,251,1)_100%)] rounded-xl transition ease-in-out duration-150 hover:scale-105 text-base"
          onClick={() => setCurrency("EUR")}
        >
          EUR (€)
        </Button>
        <Button
          className=" w-24 bg-[radial-gradient(51.41%_105.14%_at_50.04%_105.14%,rgba(10,48,139,1)_0%,rgba(30,110,251,1)_100%)] rounded-xl transition ease-in-out duration-150 hover:scale-105 text-base"
          onClick={() => setCurrency("USD")}
        >
          USD ($)
        </Button>
        <Button
          className=" w-24 bg-[radial-gradient(51.41%_105.14%_at_50.04%_105.14%,rgba(10,48,139,1)_0%,rgba(30,110,251,1)_100%)] rounded-xl transition ease-in-out duration-150 hover:scale-105 text-base"
          onClick={() => setCurrency("GBP")}
        >
          GBP (£)
        </Button>
      </div>

      <div className="flex justify-center gap-6">
        {data &&
          data.map((e) => (
            <Card
              key={e.id}
              className={
                e.title !== "Ultime"
                  ? "flex flex-col justify-between w-[375px] h-[650px]  bg-[radial-gradient(103.02%_79.39%_at_50.04%_100%,rgba(3,25,83,1)_0%,rgba(23,112,247,1)_120%)]"
                  : "flex flex-col justify-between w-[403px] h-[750px] bg-[#A3D7FD] bg-[url('/Ellipse11.png'),url('/Ellipse13.png')] bg-cover bg-center bg-no-repeat border-2 border-[#E7EBFF]"
              }
            >
              <CardHeader>
                {e.title === "Ultime" ? (
                  <CardTitle className="flex flex-col gap-4 text-3xl">
                    <Image
                      alt="icon"
                      src="/Icon(1).png"
                      width={47}
                      height={47}
                    />
                    <div className="flex items-center gap-4">
                      {e.title}
                      <Image
                        alt="bestOffer"
                        src="/Frame47.png"
                        width={85}
                        height={100}
                      />
                    </div>
                  </CardTitle>
                ) : (
                  <CardTitle className="flex flex-col gap-4 text-3xl">
                    <Image alt="icon" src="/Icon.png" width={45} height={45} />
                    {e.title}
                  </CardTitle>
                )}
                <CardDescription className="border-b-2 pt-4 pb-8 text-xl">
                  <span className="text-5xl">
                    {getCurrencySymbol()}
                    {convertPrice(e.priceYear)}
                  </span>{" "}
                  /mois
                </CardDescription>
              </CardHeader>
              <CardContent>
                {e.included.map((item) => (
                  <ul key={item}>
                    <li className="flex items-center text-lg gap-[5px] leading-[45px]">
                      <IoCheckmark />
                      {item}
                    </li>
                  </ul>
                ))}
              </CardContent>
              <CardFooter className="flex justify-center items-center">
                <Button className=" w-[314px] h-[47px] bg-[radial-gradient(51.41%_105.14%_at_50.04%_105.14%,rgba(10,48,139,1)_0%,rgba(30,110,251,1)_100%)] rounded-[9.24px] transition ease-in-out duration-150 hover:scale-105 text-lg">
                  Je m'abonne
                </Button>
              </CardFooter>
            </Card>
          ))}
      </div>
    </section>
  );
}
