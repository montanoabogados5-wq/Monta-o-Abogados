import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

type Props = {
  to: string;
  title: string;
  short: string;
  image: string;
};

export default function ServiceCard({ to, title, short, image }: Props) {
  return (
    <Link to={to} className="group block h-full">
      <Card className="h-full hover:shadow-lg transition-shadow">
        <CardContent className="p-0">
          <div className="relative rounded-t-2xl overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full aspect-[3/2] object-cover"
              loading="lazy"
            />
          </div>
          <div className="p-5">
            <h3 className="font-semibold text-lg text-zinc-900">{title}</h3>
            <p className="text-sm text-zinc-600 mt-2">{short}</p>
            <div className="mt-4 inline-flex items-center text-[#D4AF37] text-sm">
              Ver detalles
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

