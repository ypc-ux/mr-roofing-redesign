import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
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
  title: "Matt — Your Custom Proposal | Julius Young III",
  description: "Everything I built for Mr. Roofing. Website, lead gen, and AI calling. One link. Three minutes.",
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

