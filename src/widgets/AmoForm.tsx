import { useEffect } from "react";

export default function AmoForm() {
    useEffect(() => {
        const popup = document.getElementById("gallery");
        if (!popup) return;

        // Inline script
        const inlineScript = document.createElement("script");
        inlineScript.innerHTML = `!function(a,m,o,c,r,m){
      a[o+c]=a[o+c] || {setMeta:function(p){this.params=(this.params||[]).concat([p])}},
      a[o+r]=a[o+r] || function(f){(a[o+r].f=a[o+r].f||[]).push(f)},
      a[o+r]({id:"1598338",hash:"7e8cf189dd49cd382339b0b44833cbf3",locale:"ru"}),
      a[o+m]=a[o+m] || function(f,k){(a[o+m].f=a[o+m].f||[]).push([f,k])}
    }(window,0,"amo_forms_","params","load","loaded");`;

        // External script
        const externalScript = document.createElement("script");
        externalScript.id = "amoforms_script_1598338";
        externalScript.async = true;
        externalScript.charset = "utf-8";
        externalScript.src = "https://forms.amocrm.ru/forms/assets/js/amoforms.js?1757488603";

        // Append both into #popup
        popup.appendChild(inlineScript);
        popup.appendChild(externalScript);

        return () => {
            // Cleanup
            popup.removeChild(inlineScript);
            popup.removeChild(externalScript);
        };
    }, []);

    return null; // form will be injected into #popup
}
