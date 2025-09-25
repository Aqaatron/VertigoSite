import {Suspense} from "react";
import Metrika from "@/components/metrika";

export default function Layout({children}) {
    return (
        <>
            <main>{children}</main>
            <Suspense>
                <Metrika/>
            </Suspense>
        </>
    )
}