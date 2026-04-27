import type { ApplicationType, ApplicationStatus, NotificationType } from "./types";

export const APPLICATION_TYPES: ApplicationType[] = [
  "Development Permit",
  "Certificate of Registration and License to Sell",
  "Temporary License to Sell",
  "Alteration of Plan",
];

export const APPLICATION_TYPE_SLUGS: Record<ApplicationType, string> = {
  "Development Permit": "development-permit",
  "Certificate of Registration and License to Sell": "crls",
  "Temporary License to Sell": "temporary-license-to-sell",
  "Alteration of Plan": "alteration-of-plan",
};

export const SLUG_TO_APPLICATION_TYPE: Record<string, ApplicationType> = {
  "development-permit": "Development Permit",
  crls: "Certificate of Registration and License to Sell",
  "temporary-license-to-sell": "Temporary License to Sell",
  "alteration-of-plan": "Alteration of Plan",
};

export const APPLICATION_TYPE_SHORT: Record<ApplicationType, string> = {
  "Development Permit": "DP",
  "Certificate of Registration and License to Sell": "CR/LS",
  "Temporary License to Sell": "Temporary LTS",
  "Alteration of Plan": "Alteration of Plan",
};

export const REQUIREMENTS_MAP: Record<ApplicationType, string[]> = {
  "Development Permit": [
    "Duly accomplished application form",
    "Proof of ownership or authority",
    "Project Description",
    "Site Development Plan",
    "Location Map",
    "Others (if applicable)",
  ],
  "Certificate of Registration and License to Sell": [
    "Duly accomplished application form",
    "Proof of ownership or authority",
    "Project Description",
    "Site Development Plan",
    "Location Map",
    "Certified True Copy of TCT/OCT",
    "Others (if applicable)",
  ],
  "Temporary License to Sell": [
    "Duly accomplished application form",
    "Proof of ownership or authority",
    "Project Description",
    "Location Map",
    "Others (if applicable)",
  ],
  "Alteration of Plan": [
    "Original approved plan",
    "Proposed alteration plan",
    "Justification/explanation letter",
    "Proof of ownership or authority",
    "Others (if applicable)",
  ],
};

export const APPLICATION_FEES: Record<ApplicationType, number> = {
  "Development Permit": 700,
  "Certificate of Registration and License to Sell": 1500,
  "Temporary License to Sell": 1000,
  "Alteration of Plan": 500,
};

export const STATUS_LIST: ApplicationStatus[] = [
  "Draft",
  "For Payment",
  "Received",
  "Ongoing Evaluation",
  "Ongoing Inspection",
  "Ongoing Approval",
  "Released",
  "Disapproved",
];

export const APPLICANT_TYPES = [
  "Individual",
  "Corporation",
  "Partnership",
  "Cooperative",
];

export const NOTIFICATION_TYPE_COLORS: Record<NotificationType, string> = {
  "Application Update": "bg-green-100 text-green-700",
  "Payment Reminder": "bg-yellow-100 text-yellow-700",
  "New Message": "bg-blue-100 text-blue-700",
};

export const APPLICATION_TYPE_COLORS: Record<ApplicationType, { bg: string; icon: string }> = {
  "Development Permit": { bg: "bg-blue-100", icon: "text-blue-600" },
  "Certificate of Registration and License to Sell": { bg: "bg-green-100", icon: "text-green-600" },
  "Temporary License to Sell": { bg: "bg-orange-100", icon: "text-orange-600" },
  "Alteration of Plan": { bg: "bg-purple-100", icon: "text-purple-600" },
};
