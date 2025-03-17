import { useState } from "react";
import { useEffect } from "react";

function CountdownTimer() {
    const [countdown, setCountdown] = useState(10); // Countdown from 10 seconds

    useEffect(() => {
        if (countdown > 0) {
            const timer = setInterval(() => {
                setCountdown((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(timer); // Cleanup on unmount
        }
    }, [countdown]);

    return (
        <div>
            <h1>Countdown: {countdown}</h1>
        </div>
    );
}


export default CountdownTimer;