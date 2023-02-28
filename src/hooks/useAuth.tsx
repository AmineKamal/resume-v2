import { useEffect, useState } from "react";
import { sha512 } from "../utils";

const HASH =
    "55ea29826863d6044c6dfb911445b1069f2eda789cea1af00b44fa588d7197805552b0d909654cafaf501466f1556c6eb52e324d3f1720e6455eacdc541e9672";

async function checkPass(pass?: string) {
    pass = pass ?? window.location.href.match(/pass=([^&]*)/)?.[1].toUpperCase();

    if (!pass) {
        return false;
    }

    return (await sha512(pass)) === HASH;
}

export function useAuth() {
    const [isValidPass, setValidPass] = useState(true);

    useEffect(() => {
        checkPass().then(setValidPass);
    }, []);

    function dispatchPass(pass: string) {
        checkPass().then(setValidPass);
    }

    return { isValidPass, dispatchPass };
}
