import { SVGAttributes } from 'react';
import SierraLogo from "../../images/sierra-logo.png"

export default function ApplicationLogo(props: SVGAttributes<SVGElement>) {
    return (
        <img
        src={SierraLogo}
        alt=''
        height={80}
        width={80}
        />
    );
}
