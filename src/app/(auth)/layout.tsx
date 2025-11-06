import SignInImage from "../../../public/images/signin-img.png";
import ImageSection from "@/components/auth/ImageSection";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 

  return (
    <main className="remove-scrollbar flex flex-col lg:flex-row min-h-screen w-full justify-center lg:justify-between items-center lg:items-stretch">
      <div className="flex w-full lg:w-[60%] justify-center lg:justify-start px-4">{children}</div>
      <div className="hidden lg:flex h-screen w-[40%] sticky top-0 items-center justify-end bg-sky-1">
        <ImageSection
          imageSrc={SignInImage}
          altText="sign-in-image"
          containerWidth="40%"
          imageHeight={1000}
          imageWidth={1000}
          className="h-10 w-fit"
          placeholder="blur"
        />
      </div>
    </main>
  );
}
