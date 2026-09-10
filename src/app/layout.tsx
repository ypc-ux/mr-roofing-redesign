import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mr. Roofing & Construction | East Atlanta Roofing Experts",
  description:
    "Family-owned roofing and construction serving Metro East Atlanta since 2017. Asphalt roofing, repairs, siding, gutters. Free estimates. Call (470) 706-9339.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <body>
        <div className="scroll-progress" id="progress" />
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                var p=document.getElementById('progress');
                if(p){
                  window.addEventListener('scroll',function(){
                    var h=document.documentElement;
                    var pct=(h.scrollTop/(h.scrollHeight-h.clientHeight))*100;
                    p.style.width=pct+'%';
                  });
                }
                var obs=new IntersectionObserver(function(entries){
                  entries.forEach(function(e){
                    if(e.isIntersecting){e.target.classList.add('revealed');}
                  });
                },{threshold:0.15});
                document.querySelectorAll('.reveal').forEach(function(el){obs.observe(el);});
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}

