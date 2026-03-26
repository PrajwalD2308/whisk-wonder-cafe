import { Suspense } from "react";
import MenuClient from "./MenuClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading menu...</div>}>
      <MenuClient />
    </Suspense>
  );
}
