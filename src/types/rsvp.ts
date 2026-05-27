export type RsvpFormData = {
  name: string;
  email: string;
  attending: "yes" | "no";
  adults: string;
  children: string;
  alcohol: string;
  dietary: string;
  message: string;
};

export type FormState = {
  success: boolean;
  error?: string;
};
