import { DoctorHome } from "@/components/niches/doctors/DoctorHome";
import { doctorsConfig } from "@/lib/niches/doctors";

export default function DoctorsPage() {
  return <DoctorHome config={doctorsConfig} />;
}
