"use client";

import {useEffect} from "react";
import {usePathname, useSearchParams} from "next/navigation";
import Script from "next/script";

//const base = "https://example.ru";

export default function Metrika() {
    // const pathName = usePathname();
    // const searchParams = useSearchParams();
    //
    // useEffect(() => {
    //     const params = searchParams.toString();
    //     //const url = base + pathName + (params ? "?" + params : "");
    //
    //     ym(104030838, "reachGoal", 'fos');
    // }, [pathName, searchParams]);

    return (
        <Script id="metrika">
            {`
         (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=104030838', 'ym');

    ym(104030838, 'init', {
    ssr:true, 
    webvisor:true, 
    clickmap:true, 
    ecommerce:"dataLayer", 
    accurateTrackBounce:true, 
    trackLinks:true});
      `}
        </Script>
    );
}