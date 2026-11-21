import { getDict, type Locale } from "@/lib/i18n";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import { Booking, Doctors, Journey, Services } from "./Sections";

export default function Site({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  return (
    <>
      <Header locale={locale} dict={dict} />
      <main>
        <Hero dict={dict} />
        <Services dict={dict} />
        <Doctors dict={dict} />
        <Journey dict={dict} />
        <Booking dict={dict} />
      </main>
      <Footer locale={locale} dict={dict} />
    </>
  );
}
