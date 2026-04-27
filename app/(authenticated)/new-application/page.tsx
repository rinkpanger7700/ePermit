"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Grid2X2, FileCheck, Tag, PenLine } from "lucide-react";
import { usePageTitle } from "@/context/PageTitleContext";
import { APPLICATION_TYPE_SLUGS } from "@/lib/constants";
import type { ApplicationType } from "@/lib/types";

const APP_TYPES: {
  type: ApplicationType;
  icon: React.ElementType;
  description: string;
  bg: string;
  iconColor: string;
  borderColor: string;
}[] = [
  {
    type: "Development Permit",
    icon: Grid2X2,
    description: "Apply for a development permit for your residential, commercial, or mixed-use project.",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
    borderColor: "hover:border-blue-400",
  },
  {
    type: "Certificate of Registration and License to Sell",
    icon: FileCheck,
    description: "Apply for registration and license to sell for your subdivision or condominium project.",
    bg: "bg-green-50",
    iconColor: "text-green-600",
    borderColor: "hover:border-green-400",
  },
  {
    type: "Temporary License to Sell",
    icon: Tag,
    description: "Apply for a temporary license to sell while your full license is being processed.",
    bg: "bg-orange-50",
    iconColor: "text-orange-600",
    borderColor: "hover:border-orange-400",
  },
  {
    type: "Alteration of Plan",
    icon: PenLine,
    description: "Apply for alteration or modification of a previously approved development plan.",
    bg: "bg-purple-50",
    iconColor: "text-purple-600",
    borderColor: "hover:border-purple-400",
  },
];

export default function NewApplicationPage() {
  usePageTitle("NEW APPLICATION");
  return (
    <div className="px-6 py-6">

      <div className="p-8 lg:p-12">
        <div className="mb-10">
          <h2 className="text-2xl font-extrabold text-gray-900">Select Application Type</h2>
          <p className="text-gray-500 mt-2 text-base">Choose the type of application you want to file. Each type has specific requirements.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {APP_TYPES.map(({ type, icon: Icon, description, bg, iconColor, borderColor }) => (
            <Link
              key={type}
              href={`/new-application/${APPLICATION_TYPE_SLUGS[type]}/step1`}
              className={`bg-white rounded-2xl border-2 border-gray-100 p-8 flex items-start gap-6 hover:shadow-xl transition-all duration-200 card-hover group ${borderColor}`}
            >
              <div className={`w-16 h-16 ${bg} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                <Icon className={`w-8 h-8 ${iconColor}`} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-extrabold text-gray-900 leading-snug mb-2 text-base">{type}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#1A3A8F] transition-colors flex-shrink-0 mt-1" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
