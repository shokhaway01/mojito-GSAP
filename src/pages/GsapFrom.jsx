import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const GsapFrom = () => {
  // TODO: Implement the gsap.from() method


  useGSAP( () => {
    gsap.from("#green-box", {
      duration: 2,
      x: 1500,
      rotation: 360,
      yoyo: true,
      scale: 2.5,
      borderRadius: "50%",
      boxShadow: "0px 0px 20px red",
      repeat: -1,
      repeatDelay: 0.5,
      ease: "power1.out",
      backgroundColor: "red",
    }, [])
  } )


  return (
    <main>
      <h1>GsapFrom</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.from()</code> method is used to animate elements from a
        new state to their current state.
      </p>

      <p className="mt-5 text-gray-500">
        The <code>gsap.from()</code> method is similar to the{" "}
        <code>gsap.to()</code> method, but the difference is that the{" "}
        <code>gsap.from()</code> method animates elements from a new state to
        their current state, while the  <code>gsap.to()</code> method animates
        elements from their current state to a new state.
      </p>

      <p className="mt-5 text-gray-500">
        Read more aboutt the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.from()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          g sap.from()
        </a>{" "}
        method.
      </p>

      <div className="mt-20">
        <div id="green-box" className="w-20 h-20 bg-green-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapFrom;
